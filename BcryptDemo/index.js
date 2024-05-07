import bcrypt from 'bcrypt';

// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(12);
//   console.log(salt);
//   return await bcrypt.hash(password, salt);
// };

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 12);
};

const login = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// hashPassword('monkey').then((hash) => {    
//     console.log(hash);
// });

login('monkey', '$2b$12$KgX/0X99Ycz/.LrYEraaiOt4CU./EY2Mq8FzJrAlvGi8s9e8yq8ii').then((result) => {
    console.log(result);
});