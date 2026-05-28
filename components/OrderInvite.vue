<!-- OrderInvitePopup.vue -->
<template>
<view v-if="isVisible" class="flex-col justify-center items-center page-overlay">
  <view class="flex-col section">
    <image class="self-start image_2" src="../static/close.png" @click="closePopup"/>
    <view class="flex-col group">
      <view class="flex-col justify-between self-stretch">
        <image class="avatar" :src="avatar_url"/>
      </view>
      <text class="self-start text mt-28-5">{{ username }}发起的拼车邀约</text>
    </view>
    <view class="flex-col mt-37-5">
      <view class="flex-col self-stretch relative section_2">
        <view class="flex-row justify-center items-center self-start relative group_2" style="width:270px;margin-left:0px">
          <image class="image_3" src="../static/clock.png"/>
          <text class="font text_2" style="margin-left:10px">{{ time }}</text>
        </view>
        <view class="flex-row items-center self-stretch group_3">
          <image class="image_4" src="../static/start.png"/>
          <text class="font_2 ml-35-5">{{ start_loc }}</text>
        </view>
        <view class="flex-row items-center self-stretch group_4">
          <image class="image_4" src="../static/dest.png"/>
          <text class="font_2 ml-35-5">{{ dest_loc }}</text>
        </view>
      </view>
      <view class="self-start group_5 mt-43">
        <text class="font text_4">参与人：</text>
        <text class="text_5">{{ username_2 }}</text>
      </view>
      <button class="flex-col justify-center items-center self-stretch button mt-43">
        <text class="font text_6">接 受 邀 约</text>
      </button>
    </view>
  </view>
</view>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: true
    },
    username: {
      type: String,
      default: '测试者'
    },
    time: {
      type: String,
      default: '2025年3月24日13:49'
    },
    start_loc: {
      type: String,
      default: '同济大学（嘉定校区）'
    },
    dest_loc: {
      type: String,
      default: '同济大学（四平校区）'
    },
    username_2: {
      type: String,
      default: 'JYD'
    },
		
	avatar_url: {
		type:String,
		default:'../static/user_2.jpg'
		
	}
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="css">
.mt-28-5 {
  margin-top: 31.9rpx;
}
.mt-37-5 {
  margin-top: 41.98rpx;
}
.ml-35-5 {
  margin-left: 39.74rpx;
}
.mt-43 {
  margin-top: 48.13rpx;
}

.page-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}
.section {
  padding: 13.43rpx;
  background-color: #ffffff;
  border-radius: 50rpx;
  border-left: solid 5.6rpx #084fa1;
  border-right: solid 5.6rpx #084fa1;
  border-top: solid 5.6rpx #084fa1;
  border-bottom: solid 5.6rpx #084fa1;
  width: 80%;
  margin-left: 8%;
  margin-top: 100px;
}
.group {
  padding-left: 0px;
  padding-right: 11.19rpx;
  display: flex; /* 添加 Flexbox 布局 */
  flex-direction: column; /* 设置为上下排列 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100%; /* 确保有足够的高度来居中 */
}
.avatar {
  margin-left: 0; /* 移除左边距 */
  border-radius: 201.49rpx;
  width: 100.19rpx;
  height: 98.51rpx;
  border: 3px solid #084fa1;
}
.image_2 {
  margin-top: 6.16rpx;
  width: 55.97rpx;
  height: 55.97rpx;
  right:-265px;
}
.text {
  color: #084fa1;
  font-size: 41.98rpx;
  font-family: SourceHanSansCN;
  font-weight: 700;
  line-height: 40.39rpx;
  margin-top: 10px; /* 添加顶部间距 */
}
.section_2 {
  width: 265px;
  padding: 21.27rpx;
  background-color: #edf5f7;
  border-radius: 18.47rpx;
  border-left: solid 2.8rpx #084fa1;
  border-right: solid 2.8rpx #084fa1;
  border-top: solid 2.8rpx #084fa1;
  border-bottom: solid 2.8rpx #084fa1;
}
.group_2 {
  margin-left: 85.07rpx;
  padding-bottom: 6.72rpx;
  width: 210rpx;
  display: flex; /* 添加 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
}
.font {
  font-size: 39.18rpx;
  font-family: SourceHanSansCN;
  line-height: 47.01rpx;
  font-weight: 700;
}
.text_2 {
  color: #084fa1;
  font-size: 40rpx;
}
.text_3 {
  color: #084fa1;
  font-size: 44.78rpx;
  font-family: SourceHanSansCN;
  font-weight: 700;
  line-height: 53.73rpx;
  word-break: break-all;
  width: 0.28rpx;
}
.pos_2 {
  position: absolute;
  right: 271.9rpx;
  top: 50%;
  transform: translateY(-50%);
}
.group_3 {
  margin-top: 22.39rpx;
  display: flex; /* 添加 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
}
.image_4 {
  width: 44.78rpx;
  height: 45.9rpx;
}
.font_2 {
  font-size: 33.58rpx;
  font-family: SourceHanSansCN;
  line-height: 31.97rpx;
  color: #000000;
}
.group_4 {
  margin-top: 21.27rpx;
  display: flex; /* 添加 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
}
.image_3 {
  width: 25px;
  height: 25px;
}
.pos {
  position: absolute;
  left: -9.31rpx;
  top: 4.12rpx;
}
.group_5 {
  margin-left: 26.87rpx;
  line-height: 37.38rpx;
}
.text_4 {
  color: #808080;
  line-height: 37.38rpx;
}
.text_5 {
  color: #000000;
  font-size: 39.18rpx;
  font-family: SourceHanSansCN;
  line-height: 29.23rpx;
}
.text-wrapper {
  margin-left: 7.84rpx;
  margin-right: 21.27rpx;
  padding: 18.47rpx 0 21.27rpx;
  background-color: #2a82e4;
  border-radius: 18.47rpx;
}
.text_6 {
  color: #ffffff;
  width: 294px;
}
.button {
  margin-left: 7.84rpx;
  margin-right: 21.27rpx;
  padding: 18.47rpx 0 21.27rpx;
  background-color: #2a82e4;
  border-radius: 18.47rpx;
  border: none; /* 移除默认边框 */
  display: flex; /* 添加 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 285px; /* 设置宽度 */
  color: #ffffff; /* 设置文本颜色 */
  font-size: 39.18rpx; /* 设置字体大小 */
  font-family: SourceHanSansCN; /* 设置字体 */
  font-weight: 700; /* 设置字体粗细 */
  line-height: 29.23rpx; /* 设置行高 */
  margin-bottom: 10px;
  
}
</style>