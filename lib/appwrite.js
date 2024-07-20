import { Client,Account,ID, Avatars, Databases} from 'react-native-appwrite';
export const Config ={
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.huangdi.reels',
    projectId:'66915a740029cbeaf539',
    databaseId:"6691cb6c000ffccc4ae0",
    userCollectionId:"6691cbab0021a57ce94b",
    videoCollectionId:"6691cbd400331c244c1b",
    storageId:"669bc9a00012ee903b6b"
}


// Init your React Native SDK
const client = new Client();
client
    .setEndpoint(Config.endpoint) // Your Appwrite Endpoint
    .setProject(Config.projectId) // Your project ID
    .setPlatform(Config.platform) // Your application ID or bundle ID.
const account = new Account(client);
const databases = new Databases(client)
const avatars = new Avatars(client)
export const createUser =async(email, password,username) =>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error
        //create user avatar
        const avatarurl = avatars.getInitials(username)
        await signIn(email, password)
        //Add user object your datsbase
        const newUser =  await databases.createDocument(
            Config.databaseId,
            Config.userCollectionId,
            ID.unique(),
            {
                accountId:newAccount.$id,
                email,
                username,
                avatar:avatarurl
            }
             
        )
        return newUser
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const signIn =async (email, password)=>{
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        console.log("signin error",error)
        throw new Error(error)
    }
}
