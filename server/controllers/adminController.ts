import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

function generateJwtToken(email: string, type: string, secretKey: string) {
    const payload = { email, type };
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secretKey, options);
}

export default {
    login: async(req: Request, res: Response): Promise<void> => {
        try {
            console.log(req.body);
            const adminEmail: string = process.env.ADMIN_EMAIL!;
            const adminPassword: string = process.env.ADMIN_PASSWORD!;
            
            
            if(adminEmail !== req.body.email) {
                res.status(401).json({
                    message: 'No admin with that email',
                    err: 'email',
                    errOpt: 'notExist'
                });
                return;
            }

            if(adminPassword !== req.body.password){
                res.status(401).json({
                    message: 'Invalid crendential',
                    err: 'password',
                    errOpt: 'infoErr'
                });
                return;
            }

            const token: string = generateJwtToken (adminEmail, 'Admin', process.env.JWTSecrectKey!);

            res.status(200).json({
                message: 'Successfuly Logged in',
                token
            });
        } catch (err: any) {
            console.error(err, 'login admin');
            res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
}