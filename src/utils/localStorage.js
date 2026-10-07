const STORAGE_KEY = 'claim-mbg-record-id'

export const getStoredRecord = () => {
    try {
        return localStorage.getItem(STORAGE_KEY)
    } catch {
        return null
    }
}

export const  saveRecordId = (recordId) => {
    try {
        if (recordId) {
            localStorage.setItem(STORAGE_KEY, String(recordId))
        } else {
            localStorage.removeItem(STORAGE_KEY)
        }
    } catch (error) {
        alert(error)
    }
}