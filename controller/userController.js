import {User} from '../model/User.js';
import jwt from 'jsonwebtoken';
import {sendMail} from '../middleware/sendMail.js';
import cloudinary from 'cloudinary';

export const Login = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email, password});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password !"
            })
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        res.status(200).cookie("token", token, { /**"token"-je naziv cookie-a */
            expires: new Date(Date.now() + 600000),
            httpOnly: true /**zabranjuje client-side script-ma da pristupe podatcima cookie-a */
        }).json({
            success: true,
            message: "Logged In Successfully"
        })
    } catch (error) {
        return res.status(400).json({ success: false ,message: error.message});
    }
}

export const logout = (req, res) => {
    try {
        res.status(200).cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        }).json({
            success: true,
            message: "Logged Out Successfully"
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message});
    };
}

export const getUser = async(req, res) => {
    try {
        const user = await User.findOne().select("-password -email");

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const myProfile = async(req, res) => {
    try {

        const user = await User.findById(req.user._id);

        res.status(200).json({
            success: true,
            user
        });
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

export const contact = async(req, res) => {
    try {
        const {name, email, message} = req.body;

        const userMessage = `Hey my name is ${name}. My email is ${email}. My message is ${message}.`;

        await sendMail(userMessage);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully !"
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const updateUser = async(req, res) => {
    try {
        const user = await User.findById(req.user._id);

        const {name, email, password, skills, about} = req.body;

        if(name){
            user.name = name;
        }
        if(email){
            user.email = email
        }
        if(password){
            user.password = password;
        }
        if(skills){
            if(skills.image1){
                await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {folder: "Portfolio"});
                user.skills.image1 = { //na osnovu model-a
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                };
            }

            if(skills.image2){
                await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {folder: "Portfolio"});
                user.skills.image2 = { //na osnovu model-a
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                };
            }

            if(skills.image3){
                await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {folder: "Portfolio"});
                user.skills.image3 = { //na osnovu model-a
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                };
            }

            if(skills.image4){
                await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {folder: "Portfolio"});
                user.skills.image4 = { //na osnovu model-a
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                };
            }

            if(skills.image5){
                await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {folder: "Portfolio"});
                user.skills.image5 = { //na osnovu model-a
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                };
            }

            if(skills.image6){
                await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {folder: "Portfolio"});
                user.skills.image6 = { //na osnovu model-a
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                };
            }
        }

        if(about){
            user.about.name = about.name;
            user.about.title = about.title;
            user.about.subtitle = about.subtitle;
            user.about.description = about.description;
            user.about.quote = about.quote;

            if(about.avatar){
                await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
                
               const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {folder: "Portfolio"});

               user.about.avatar = {
                   public_id: myCloud.public_id,
                   url: myCloud.secure_url
               }
            }
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: "User Updated Successfully"
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const addTimeline = async(req, res) => {
    try {
        const {title, description, date} = req.body;
        const user = await User.findById(req.body._id);

        user.timeline.unshift({
            title,
            description,
            date
        })

        await user.save();

        res.status(200).json({
            success: true,
            message: "Added to timeline"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const addProject = async(req, res) => {
    try {
        const {url, title, image, description, techStack} = req.body;
        const user = await User.findById(req.user._id);//req.user._id dobijamo od middleware-a auth.js


        const myCloud = await cloudinary.v2.uploader.upload(image, {folder: "Portfolio"})

        user.projects.unshift({
            url,
            title,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url
            },
            description,
            techStack
        })

        await user.save();
        res.status(200).json({
            success: true,
            message: "Project added successfully"
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}

export const deleteTimeline = async(req, res) => {
    try {
        const {id} = req.params;//req.params se dobijaju iz url-a
        const user = await User.findById(req.body._id);

       user.timeline = user.timeline.filter((item)=> item._id !== id)
        //Napravice novi niz koji sadrzi el. ciji se _id-ovi razlikuju od id
        await user.save();

        res.status(200).json({
            success: true,
            message: "Deleted from timeline"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteProject = async(req, res) => {
    try {
        const {id} = req.params;//req.params se dobijaju iz url-a
        const user = await User.findById(req.body._id);

       const project = user.projects.filter((item)=> item._id === id)
        //U project sacuva projekat koji ima _id jednak id-u

        await cloudinary.v2.uploader.destroy(project.image.public_id);//brišemo sliku projekta

        user.projects = user.projects.filter((item)=> item._id !== id);
        //filtriramo niz da izbacimo odabrani projekat
        await user.save();

        res.status(200).json({
            success: true,
            message: "Deleted from projects"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}