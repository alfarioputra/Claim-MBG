import { useState } from "react";
import FormInput from "../components/FormInput";
import PickupStep from "../components/PickupStep";
import ReturnStep from "../components/ReturnStep";

export default function Form() {
    const [recordId, setRecordId] = useState(null)
    const [isPickupCompleted, setIsPickupCompleted] = useState(false)

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
            <FormInput 
                onCreated={(id) => {
                    setRecordId(id)
                    setIsPickupCompleted(false)
                }}
            />
            <PickupStep 
                recordId={recordId} 
                onSuccess={() => setIsPickupCompleted(true)}  
            />
            <ReturnStep 
                recordId={recordId} 
                isPickupCompleted={isPickupCompleted}
                onComplete={() => {
                    setRecordId(null)
                    setIsPickupCompleted(false)    
                }}
            />
        </div>
    )
}