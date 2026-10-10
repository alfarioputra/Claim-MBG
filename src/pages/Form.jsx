import { useState } from "react";
import FormInput from "../components/FormInput";
import PickupStep from "../components/PickupStep";
import ReturnStep from "../components/ReturnStep";
import { getStoredRecord, saveRecordId, getStoredPickupCompleted, savePickupCompleted } from "../utils/localStorage";
import { FileText } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Form() {
    const [recordId, setRecordId] = useState(getStoredRecord)
    const [isPickupCompleted, setIsPickupCompleted] = useState(getStoredPickupCompleted)

    return (
        <>
        <Navbar compact />
        <div className="min-h-screen bg-[#F1F7FF] px-4 py-6">
            <div className="max-w-5xl mx-auto flex flex-col gap-5">
                <div className="w-full flex items-center justify-between bg-[#046AB8] p-5 shadow-md">
                    <div className="flex items-center gap-3">
                        <FileText size={30} color="white" />
                        <div>
                            <h1 className="text-white text-xl">Form Pengambilan MBG</h1>
                            <p className="text-white text-sm">MAN 1 Kota Kediri</p>
                        </div>
                    </div>
                </div>
                <FormInput 
                    onCreated={(id) => {
                        saveRecordId(id)
                        savePickupCompleted(false)
                        setRecordId(id)
                        setIsPickupCompleted(false)
                    }}
                />
                <PickupStep 
                    recordId={recordId} 
                    onSuccess={() => {
                        savePickupCompleted(true)
                        setIsPickupCompleted(true)  
                    }}

                />
                <ReturnStep 
                    recordId={recordId} 
                    isPickupCompleted={isPickupCompleted}
                    onComplete={() => {
                        saveRecordId(null)
                        savePickupCompleted(false)
                        setRecordId(null)
                        setIsPickupCompleted(false)    
                    }}
                />
            </div>
        </div>
        <Footer />
        </>
    )
}