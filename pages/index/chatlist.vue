<template>
  <!-- 添加一个外层容器专门用于背景色 -->
  <view class="page-container">
    <view class="flex-col page">
      <NavigationBar />
      <view class="flex-row align-items-center section" style="position: relative;height:40px">
        <text class="font text ml-39-5" style="color:white;font-size:20px;margin-left:10px;">{{ username }}</text>
        <image
          class="avatar"
          :src="avatar"
          style="position: absolute; right: 20rpx;height:40px;width:40px"
        />
      </view>
      
      <!-- 聊天列表 -->
      <scroll-view class="chat-list" scroll-y="true">
        <view class="chat-list-content">
          <view 
            v-for="(chat, index) in processedListWithAvatars" 
            :key="index" 
            class="chat-item" 
            @click="goToChat(chat)"
          >
            <image class="avatar" :src="chat.avatar || '../../static/default_group_avater.png'" />
            <view class="chat-content">
              <view class="chat-header">
                <text class="username">{{ chat.username }}</text>
                <text class="time">{{ chat.time }}</text>
              </view>
              <view class="message-preview">
                <text class="message">{{ chat.lastMessage }}</text>
                <text v-if="chat.unreadCount > 0" class="unread-count">{{ chat.unreadCount }}</text>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
      
      <!-- 隐藏的Canvas用于生成群聊头像 -->
      <canvas 
        canvas-id="groupAvatarCanvas" 
        style="position: absolute; left: -9999px; width: 100px; height: 100px;"
      ></canvas>
    </view>
  </view>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      currentUser: {
        username: '测试者',
        avatar: '../../static/user_2.jpg'
      },
      chatList: [
        {
          id: 1,
          username: 'JYD777',
          avatar: '../../static/user.jpeg',
          lastMessage: '你好！你想拼车吗？',
          time: '12:30',
          unreadCount: 2,
          isGroup: false
        },
        {
          id: 2,
          username: '拼车群',
          members: [
            {avatar: '../../static/user.jpeg'},
            {avatar: '../../static/user_2.jpg'},
            {avatar: '../../static/user_3.jpeg'},
            {avatar: '../../static/user_4.jpg'}
          ],
          lastMessage: '张三: 明天有人去四平校区吗？',
          time: '昨天',
          unreadCount: 5,
          isGroup: true
        },
        {
          id: 3,
          username: '李四',
          avatar: '../../static/user_2.jpg',
          lastMessage: '我大概14:30出发',
          time: '昨天',
          unreadCount: 0,
          isGroup: false
        },
        {
          id: 4,
          username: '王五',
          avatar: '../../static/user_3.jpeg',
          lastMessage: '收到你的邀请',
          time: '星期一',
          unreadCount: 0,
          isGroup: false
        },
        {
          id: 5,
          username: '嘉定拼车',
          members: [
            {avatar: '../../static/user.jpeg'},
            {avatar: '../../static/user_3.jpeg'},
            {avatar: '../../static/user_4.jpg'}
          ],
          lastMessage: '管理员: 本周拼车规则更新',
          time: '星期日',
          unreadCount: 10,
          isGroup: true
        },
        {
          id: 6,
          username: '赵六',
          avatar: '../../static/user_4.jpg',
          lastMessage: '谢谢你的分享',
          time: '2023/12/20',
          unreadCount: 0,
          isGroup: false
        }
      ],
      groupAvatarCache: {}, // 缓存已生成的群聊头像
      processedListWithAvatars: [] // 新增：存储已处理好的聊天列表
    };
  },
  computed: {
    username() {
      return this.currentUser.username;
    },
    avatar() {
      return this.currentUser.avatar;
    }
  },
  async created() {
    await this.fetchCurrentUser();
    await this.processChatList();
  },
  methods: {
    async fetchCurrentUser() {
      // 模拟从后端获取当前用户信息
      const mockResponse = {
        data: {
          username: '测试者',
          avatar: '../../static/user_2.jpg'
        }
      };
      this.currentUser = mockResponse.data;
    },
    
    async processChatList() {
      // 处理聊天列表，确保所有头像都是解析后的URL
      const processed = [];
      for (const chat of this.chatList) {
        if (chat.isGroup) {
          const avatar = await this.generateGroupAvatar(chat.id, chat.members);
          processed.push({...chat, avatar});
        } else {
          processed.push({...chat});
        }
      }
      this.processedListWithAvatars = processed;
    },
    
    async generateGroupAvatar(groupId, members) {
      // 如果有缓存，直接返回
      if (this.groupAvatarCache[groupId]) {
        return this.groupAvatarCache[groupId];
      }
      
      // 获取前4个成员的头像
      const avatars = members.slice(0, 4).map(m => m.avatar);
      
      if (avatars.length === 1) {
        this.groupAvatarCache[groupId] = avatars[0];
        return avatars[0];
      }
      
      try {
        // 使用Canvas生成拼接头像
        const tempFilePath = await this.drawGroupAvatar(avatars);
        this.groupAvatarCache[groupId] = tempFilePath;
        return tempFilePath;
      } catch (error) {
        console.error('生成群聊头像失败:', error);
        return '../../static/default_group_avater.png';
      }
    },
    
    drawGroupAvatar(avatarUrls) {
      return new Promise((resolve, reject) => {
        const ctx = uni.createCanvasContext('groupAvatarCanvas');
        const canvasWidth = 100;
        const canvasHeight = 100;
        const avatarCount = avatarUrls.length;
        
        // 清除画布
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // 绘制背景（白色）
        ctx.setFillStyle('#ffffff');
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // 根据头像数量确定布局
        const drawPromises = [];
        
        if (avatarCount === 2) {
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[0], 0, 0, canvasWidth/2, canvasHeight));
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[1], canvasWidth/2, 0, canvasWidth/2, canvasHeight));
        } else if (avatarCount === 3) {
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[0], 0, 0, canvasWidth, canvasHeight/2));
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[1], 0, canvasHeight/2, canvasWidth/2, canvasHeight/2));
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[2], canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2));
        } else if (avatarCount >= 4) {
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[0], 0, 0, canvasWidth/2, canvasHeight/2));
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[1], canvasWidth/2, 0, canvasWidth/2, canvasHeight/2));
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[2], 0, canvasHeight/2, canvasWidth/2, canvasHeight/2));
          drawPromises.push(this.drawAvatar(ctx, avatarUrls[3], canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2));
        }
        
        Promise.all(drawPromises).then(() => {
          ctx.draw(false, () => {
            uni.canvasToTempFilePath({
              canvasId: 'groupAvatarCanvas',
              success: (res) => {
                resolve(res.tempFilePath);
              },
              fail: (err) => {
                console.error('Canvas导出失败:', err);
                reject(err);
              }
            });
          });
        });
      });
    },
    
    drawAvatar(ctx, avatarUrl, x, y, width, height) {
      return new Promise((resolve) => {
        // 先确保图片加载完成
        uni.getImageInfo({
          src: avatarUrl,
          success: (res) => {
            ctx.save();
            // 创建圆形裁剪区域
            ctx.beginPath();
            const radius = Math.min(width, height) / 2;
            const centerX = x + width / 2;
            const centerY = y + height / 2;
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            
            // 绘制头像图片
            ctx.drawImage(res.path, x, y, width, height);
            ctx.restore();
            resolve();
          },
          fail: () => {
            // 如果图片加载失败，绘制一个默认头像
            ctx.save();
            ctx.beginPath();
            ctx.arc(x + width/2, y + height/2, Math.min(width, height)/2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.setFillStyle('#cccccc');
            ctx.fillRect(x, y, width, height);
            ctx.restore();
            resolve();
          }
        });
      });
    },
    
    goToChat(chat) {
      uni.navigateTo({
        url: `/pages/chat/chat?username=${chat.username}&avatar=${chat.avatar}`
      });
    }
  }
};
</script>

<style scoped>

.page-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
}

.page {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
}
.section {
  padding: 18.75rpx 25.52rpx;
  background-color: #2a82e4;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: flex-start; /* 水平靠左 */
}
.font {
  font-size: 31.25rpx;
  font-family: SourceHanSansCN;
  font-weight: 700;
}

.chat-list {
  height: calc(100vh - 100px);
}

.chat-item {
  display: flex;
  padding: 12px 15px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 90px;
  margin-right: 12px;
  border: 3px solid #084fa1;
}

.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.username {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.time {
  font-size: 12px;
  color: #999;
}

.message-preview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.message {
  font-size: 14px;
  color: #999;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.unread-count {
  background-color: #f44336;
  color: white;
  font-size: 12px;
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 9px;
  padding: 0 5px;
}
</style>