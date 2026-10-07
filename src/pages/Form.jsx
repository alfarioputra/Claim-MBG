import { useState } from "react";
import FormInput from "../components/FormInput";
import PickupStep from "../components/PickupStep";
import ReturnStep from "../components/ReturnStep";
import { getStoredRecord, saveRecordId, getStoredPickupCompleted, savePickupCompleted } from "../utils/localStorage";

export default function Form() {
    const [recordId, setRecordId] = useState(getStoredRecord)
    const [isPickupCompleted, setIsPickupCompleted] = useState(getStoredPickupCompleted)

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
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
    )
}