"use client"

import {Input} from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={
        {
          display: "flex",
          gap: "10px",
          backgroundColor: "grey",
          padding: "20px",
          borderRadius: "5px",
          width: "600px",
          justifyContent: "center",
          alignItems: "center",
          height: "200px"
        }
      }>
        <div>
          <Input placeholder="Enter room id" type="text" />
        </div>
        <div>
          <Button onClick={()=> {router.push("/chat/123")}} text="Join room"/>
        </div>
      </div>
    </div>
  );
}
