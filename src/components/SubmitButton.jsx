export default function SubmitButton() {
    return (
        <div className="flex justify-end mt-5">
            <button 
                type="submit" 
                className="py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            >
                Submit
            </button>
        </div>
    )
}