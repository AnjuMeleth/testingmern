const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb://db:27017/mern-starter'
  // mongoUri: 'mongodb://localhost:27017/mern-starter'  
}


export default config
