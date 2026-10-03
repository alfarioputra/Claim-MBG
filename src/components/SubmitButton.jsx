import { SendHorizonal } from "lucide-react"

export default function SubmitButton() {
    return (
        <div className="flex justify-end mt-5">
            <button 
                type="submit" 
                className="flex items-center gap-1 py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-xs cursor-pointer sm:text-sm"
            >
                Submit 
                <SendHorizonal   size={13} />
            </button>
        </div>
    )
}