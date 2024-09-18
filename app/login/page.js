"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-md p-4 bg-gray-800 text-white border border-gray-700">
                <CardHeader>
                    <h2 className="text-xl font-semibold text-center">
                        {isLogin ? "Login" : "Create an Account"}
                    </h2>
                </CardHeader>
                {/* Remplazo de CardBody con un div */}
                <div className="p-4">
                    <form>
                        {!isLogin && (
                            <div className="mb-4">
                                <Label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                </Label>
                                <Input id="name" type="text" placeholder="Your Name" className="w-full " />
                            </div>
                        )}
                        <div className="mb-4">
                            <Label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </Label>
                            <Input id="email" type="email" placeholder="Your Email" className="w-full" />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </Label>
                            <Input id="password" type="password" placeholder="Your Password" className="w-full" />
                        </div>
                        <Button type="submit" className="w-full">
                            {isLogin ? "Login" : "Sign Up"}
                        </Button>
                    </form>
                </div>
                <CardFooter className="text-center">
                    <p className="text-sm">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <a
                            href="#"
                            onClick={toggleForm}
                            className="text-blue-500 hover:underline"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AuthForm;
