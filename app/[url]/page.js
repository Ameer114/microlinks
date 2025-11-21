export const dynamic = "force-dynamic";
export const revalidate = 0;

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { url } = await params;

    const client = await clientPromise;
    const db = client.db("microlinks")
    const collection = db.collection("url")
    const doc = await collection.findOne({shorturl: url})
    console.log(doc);
    
    if(doc){
        redirect(doc.url);
    }
    redirect(process.env.NEXT_PUBLIC_HOST);
}
