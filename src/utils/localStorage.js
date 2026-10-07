const RECORD_ID_STORAGE_KEY = 'claim-mbg-record-id'
const PICKUP_COMPLETED_STORAGE_KEY = 'claim-mbg-pickup-completed'

export const getStoredRecord = () => {
    try {
        return localStorage.getItem(RECORD_ID_STORAGE_KEY)
    } catch {
        return null
    }
}

export const saveRecordId = (recordId) => {
    try {
        if (recordId) {
            localStorage.setItem(RECORD_ID_STORAGE_KEY, String(recordId))
        } else {
            localStorage.removeItem(RECORD_ID_STORAGE_KEY)
        }
    } catch (error) {
        alert(error)
    }
}

export const getStoredPickupCompleted = () => {
    try {
        return localStorage.getItem(PICKUP_COMPLETED_STORAGE_KEY) === 'true'
    } catch {
        return false
    }
}

export const savePickupCompleted = (isCompleted) => {
    try {
        if (isCompleted) {
            localStorage.setItem(PICKUP_COMPLETED_STORAGE_KEY, 'true')
        } else {
            localStorage.removeItem(PICKUP_COMPLETED_STORAGE_KEY)
        }
    } catch (error) {
        alert(error)
    }
}