import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import sample from "../assets/sample.jpeg"
export default function AboutMe() {
  return (
    <div className="p-5">
        this is my test website
        <Card>
            <CardHeader>
                <CardTitle>
                    Its dylan here
                </CardTitle>
                <CardDescription>
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={sample} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Dylan
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>C&L</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>tennis</div>
            </CardContent>
        </Card>
    </div>
  );
}