# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制 pnpm 锁文件和 package.json
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 复制项目所有文件
COPY . .

# 构建 Next.js 应用
RUN pnpm run build

# 暴露端口（Next.js 默认 3000）
EXPOSE 3000

# 启动应用
CMD ["pnpm", "start"]