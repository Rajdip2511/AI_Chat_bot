# 🚀 Software Dev Chatbot - Deployment Guide

## 🐳 **Containerized Deployment Options**

Your chatbot is now fully containerized and ready for deployment! Here are the best deployment options:

---

## **Option 1: Docker Hub + Vercel (Recommended)**

### **Step 1: Setup Docker Hub**
1. Create account at [hub.docker.com](https://hub.docker.com)
2. Create a new repository: `software-dev-chatbot`

### **Step 2: Push to Docker Hub**
```bash
# Login to Docker Hub
docker login

# Push your image
docker push rajdip/software-dev-chatbot:latest
```

### **Step 3: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set environment variables:
   - `MISTRAL_API_KEY`: `m3fRFcSdjfvDfOZP9KyMXdTuOG55Ubtz`
4. Deploy!

---

## **Option 2: Railway (Easiest)**

### **Automatic Deployment**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically detect Dockerfile
4. Set environment variable: `MISTRAL_API_KEY`
5. Deploy with one click!

**✅ URL: `https://your-app.up.railway.app`**

---

## **Option 3: Render**

### **Docker Deployment**
1. Go to [render.com](https://render.com)
2. Create "New Web Service"
3. Connect GitHub repository
4. Select "Docker" as environment
5. Set environment variable: `MISTRAL_API_KEY`
6. Deploy!

**✅ URL: `https://your-app.onrender.com`**

---

## **Option 4: DigitalOcean App Platform**

### **Professional Deployment**
1. Go to [digitalocean.com/products/app-platform](https://digitalocean.com/products/app-platform)
2. Create new app from GitHub
3. Dockerfile will be auto-detected
4. Set environment variables
5. Choose plan (basic $5/month)

---

## **🔧 Local Development with Docker**

### **Using Docker Compose**
```bash
# Start the application
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### **Using Docker directly**
```bash
# Build image
docker build -t software-dev-chatbot .

# Run container
docker run -d -p 3000:3000 \
  -e MISTRAL_API_KEY=your_api_key_here \
  --name chatbot \
  software-dev-chatbot

# View logs
docker logs chatbot

# Stop container
docker stop chatbot && docker rm chatbot
```

---

## **📋 Environment Variables**

| Variable | Required | Description |
|----------|----------|-------------|
| `MISTRAL_API_KEY` | ✅ Yes | Your Mistral AI API key |
| `NODE_ENV` | ❌ No | Set to `production` |
| `PORT` | ❌ No | Port number (default: 3000) |

---

## **🌐 GitHub Actions (Automated)**

Your repository includes GitHub Actions for automatic deployment:

### **Setup Secrets in GitHub:**
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub password
   - `VERCEL_TOKEN`: Vercel deployment token
   - `VERCEL_ORG_ID`: Vercel organization ID
   - `VERCEL_PROJECT_ID`: Vercel project ID

### **Automatic Deployment:**
- ✅ Push to `main` branch triggers build
- ✅ Builds Docker image for multiple platforms
- ✅ Pushes to Docker Hub automatically
- ✅ Deploys to Vercel automatically

---

## **🎯 Recommended Deployment Flow**

### **For Beginners:**
1. **Railway** - Easiest, one-click deployment
2. **Vercel** - Great performance, easy setup

### **For Production:**
1. **DigitalOcean** - Professional hosting
2. **AWS/Azure** - Enterprise scale

### **For Open Source:**
1. **Docker Hub** + **Vercel** - Free hosting
2. **GitHub Actions** - Automated CI/CD

---

## **✅ Deployment Checklist**

- [x] ✅ Docker image built successfully
- [x] ✅ Container tested locally
- [x] ✅ Health checks implemented
- [x] ✅ Environment variables configured
- [x] ✅ Security best practices applied
- [x] ✅ Multi-platform support (AMD64, ARM64)
- [x] ✅ GitHub Actions workflow ready
- [x] ✅ Documentation complete

---

## **🔗 Quick Deploy Links**

- **Railway**: [railway.app](https://railway.app) - Deploy in 30 seconds
- **Vercel**: [vercel.com](https://vercel.com) - Great for frontend + API
- **Render**: [render.com](https://render.com) - Free tier available
- **DigitalOcean**: [digitalocean.com](https://digitalocean.com) - Professional hosting

**Your chatbot is production-ready! 🎊** 