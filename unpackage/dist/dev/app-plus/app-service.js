if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$i = {
    data() {
      return {
        credentials: {
          username: "",
          password: ""
        },
        showWelcome: true
        // 控制显示欢迎界面
      };
    },
    mounted() {
      setTimeout(() => {
        this.showWelcome = false;
      }, 5e3);
    },
    methods: {
      login() {
        uni.navigateTo({
          url: "/pages/index/home"
          // 登录成功后的跳转
        });
      },
      goToRegister() {
        uni.navigateTo({
          url: "/pages/index/register"
          // 跳转到注册页面
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createCommentVNode(" 欢迎界面 "),
      $data.showWelcome ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "welcome-screen"
      })) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 登录界面 "),
      !$data.showWelcome ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "container"
      }, [
        vue.createElementVNode("view", { class: "card" }, [
          vue.createElementVNode("view", { class: "card-title" }, "用户登录"),
          vue.createElementVNode("view", { class: "card-body" }, [
            vue.createElementVNode("view", { class: "input-group" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.credentials.username = $event),
                  placeholder: "请输入用户名",
                  type: "text",
                  class: "input"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.credentials.username]
              ])
            ]),
            vue.createElementVNode("view", { class: "input-group" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.credentials.password = $event),
                  placeholder: "请输入密码",
                  type: "password",
                  class: "input"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.credentials.password]
              ])
            ]),
            vue.createElementVNode("view", { class: "button-group" }, [
              vue.createElementVNode("button", {
                class: "primary-button",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args))
              }, "登录")
            ]),
            vue.createElementVNode("view", { class: "register-link" }, [
              vue.createElementVNode("button", {
                class: "default-button",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.goToRegister && $options.goToRegister(...args))
              }, "没有账号？去注册")
            ])
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexLogin = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-fa14255b"], ["__file", "D:/软工课设/ride-sharing-se/pages/index/login.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _imports_0$5 = "/static/car-icon.png";
  const _imports_1$4 = "/static/launch-icon.png";
  const _imports_2$3 = "/static/chatlist.png";
  const _imports_3$2 = "/static/person-icon.png";
  const _imports_4$1 = "/static/manage-icon.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$i = {
    data() {
      return {
        // 构造静态数据，设置 is_manager 为 'yes'
        session: {
          is_manager: "yes"
        }
      };
    },
    computed: {
      isManager() {
        return this.session.is_manager === "yes";
      }
    },
    methods: {
      home() {
        uni.navigateTo({
          url: "/pages/index/home"
          // 登录成功后的跳转
        });
      },
      launch() {
        uni.navigateTo({
          url: "/pages/index/order_launch"
          // 跳转到注册页面
        });
      },
      person() {
        uni.navigateTo({
          url: "/pages/index/person"
          // 登录成功后的跳转
        });
      },
      manage() {
        uni.navigateTo({
          url: "/pages/index/manage"
          // 跳转到注册页面
        });
      },
      chatlist() {
        uni.navigateTo({
          url: "/pages/index/chatlist"
          // 跳转到注册页面
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "nav-bar" }, [
      vue.createElementVNode("div", { class: "icon-container" }, [
        vue.createElementVNode("image", {
          src: _imports_0$4,
          class: "icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.home && $options.home(...args))
        }),
        vue.createElementVNode("image", {
          src: _imports_1$2,
          class: "icon",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.launch && $options.launch(...args))
        }),
        vue.createElementVNode("image", {
          src: _imports_2$2,
          class: "icon",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.chatlist && $options.chatlist(...args))
        }),
        vue.createElementVNode("image", {
          src: _imports_3$1,
          class: "icon",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.person && $options.person(...args))
        }),
        vue.createCommentVNode(" 根据 isManager 显示或隐藏 manage-icon "),
        $options.isManager ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          src: _imports_4,
          class: "icon",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.manage && $options.manage(...args))
        })) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const NavigationBar = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-e29e7744"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/components/NavigationBar.vue"]]);
  const _sfc_main$h = {
    components: {
      NavigationBar
    },
    data() {
      return {
        currentUser: {
          username: "测试者",
          avatar: "../../static/user_2.jpg"
        },
        chatList: [
          {
            id: 1,
            username: "JYD777",
            avatar: "../../static/user.jpeg",
            lastMessage: "你好！你想拼车吗？",
            time: "12:30",
            unreadCount: 2,
            isGroup: false
          },
          {
            id: 2,
            username: "拼车群",
            members: [
              { avatar: "../../static/user.jpeg" },
              { avatar: "../../static/user_2.jpg" },
              { avatar: "../../static/user_3.jpeg" },
              { avatar: "../../static/user_4.jpg" }
            ],
            lastMessage: "张三: 明天有人去四平校区吗？",
            time: "昨天",
            unreadCount: 5,
            isGroup: true
          },
          {
            id: 3,
            username: "李四",
            avatar: "../../static/user_2.jpg",
            lastMessage: "我大概14:30出发",
            time: "昨天",
            unreadCount: 0,
            isGroup: false
          },
          {
            id: 4,
            username: "王五",
            avatar: "../../static/user_3.jpeg",
            lastMessage: "收到你的邀请",
            time: "星期一",
            unreadCount: 0,
            isGroup: false
          },
          {
            id: 5,
            username: "嘉定拼车",
            members: [
              { avatar: "../../static/user.jpeg" },
              { avatar: "../../static/user_3.jpeg" },
              { avatar: "../../static/user_4.jpg" }
            ],
            lastMessage: "管理员: 本周拼车规则更新",
            time: "星期日",
            unreadCount: 10,
            isGroup: true
          },
          {
            id: 6,
            username: "赵六",
            avatar: "../../static/user_4.jpg",
            lastMessage: "谢谢你的分享",
            time: "2023/12/20",
            unreadCount: 0,
            isGroup: false
          }
        ],
        groupAvatarCache: {},
        // 缓存已生成的群聊头像
        processedListWithAvatars: []
        // 新增：存储已处理好的聊天列表
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
        const mockResponse = {
          data: {
            username: "测试者",
            avatar: "../../static/user_2.jpg"
          }
        };
        this.currentUser = mockResponse.data;
      },
      async processChatList() {
        const processed = [];
        for (const chat of this.chatList) {
          if (chat.isGroup) {
            const avatar = await this.generateGroupAvatar(chat.id, chat.members);
            processed.push({ ...chat, avatar });
          } else {
            processed.push({ ...chat });
          }
        }
        this.processedListWithAvatars = processed;
      },
      async generateGroupAvatar(groupId, members) {
        if (this.groupAvatarCache[groupId]) {
          return this.groupAvatarCache[groupId];
        }
        const avatars = members.slice(0, 4).map((m) => m.avatar);
        if (avatars.length === 1) {
          this.groupAvatarCache[groupId] = avatars[0];
          return avatars[0];
        }
        try {
          const tempFilePath = await this.drawGroupAvatar(avatars);
          this.groupAvatarCache[groupId] = tempFilePath;
          return tempFilePath;
        } catch (error2) {
          formatAppLog("error", "at pages/index/chatlist.vue:188", "生成群聊头像失败:", error2);
          return "../../static/default_group_avater.png";
        }
      },
      drawGroupAvatar(avatarUrls) {
        return new Promise((resolve, reject) => {
          const ctx = uni.createCanvasContext("groupAvatarCanvas");
          const canvasWidth = 100;
          const canvasHeight = 100;
          const avatarCount = avatarUrls.length;
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.setFillStyle("#ffffff");
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);
          const drawPromises = [];
          if (avatarCount === 2) {
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[0], 0, 0, canvasWidth / 2, canvasHeight));
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[1], canvasWidth / 2, 0, canvasWidth / 2, canvasHeight));
          } else if (avatarCount === 3) {
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[0], 0, 0, canvasWidth, canvasHeight / 2));
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[1], 0, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2));
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[2], canvasWidth / 2, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2));
          } else if (avatarCount >= 4) {
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[0], 0, 0, canvasWidth / 2, canvasHeight / 2));
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[1], canvasWidth / 2, 0, canvasWidth / 2, canvasHeight / 2));
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[2], 0, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2));
            drawPromises.push(this.drawAvatar(ctx, avatarUrls[3], canvasWidth / 2, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2));
          }
          Promise.all(drawPromises).then(() => {
            ctx.draw(false, () => {
              uni.canvasToTempFilePath({
                canvasId: "groupAvatarCanvas",
                success: (res) => {
                  resolve(res.tempFilePath);
                },
                fail: (err) => {
                  formatAppLog("error", "at pages/index/chatlist.vue:232", "Canvas导出失败:", err);
                  reject(err);
                }
              });
            });
          });
        });
      },
      drawAvatar(ctx, avatarUrl, x, y, width, height) {
        return new Promise((resolve) => {
          uni.getImageInfo({
            src: avatarUrl,
            success: (res) => {
              ctx.save();
              ctx.beginPath();
              const radius = Math.min(width, height) / 2;
              const centerX = x + width / 2;
              const centerY = y + height / 2;
              ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(res.path, x, y, width, height);
              ctx.restore();
              resolve();
            },
            fail: () => {
              ctx.save();
              ctx.beginPath();
              ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.setFillStyle("#cccccc");
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
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 添加一个外层容器专门用于背景色 "),
        vue.createElementVNode("view", { class: "page-container" }, [
          vue.createElementVNode("view", { class: "flex-col page" }, [
            vue.createVNode(_component_NavigationBar),
            vue.createElementVNode("view", {
              class: "flex-row align-items-center section",
              style: { "position": "relative", "height": "40px" }
            }, [
              vue.createElementVNode(
                "text",
                {
                  class: "font text ml-39-5",
                  style: { "color": "white", "font-size": "20px", "margin-left": "10px" }
                },
                vue.toDisplayString($options.username),
                1
                /* TEXT */
              ),
              vue.createElementVNode("image", {
                class: "avatar",
                src: $options.avatar,
                style: { "position": "absolute", "right": "20rpx", "height": "40px", "width": "40px" }
              }, null, 8, ["src"])
            ]),
            vue.createCommentVNode(" 聊天列表 "),
            vue.createElementVNode("scroll-view", {
              class: "chat-list",
              "scroll-y": "true"
            }, [
              vue.createElementVNode("view", { class: "chat-list-content" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.processedListWithAvatars, (chat, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      class: "chat-item",
                      onClick: ($event) => $options.goToChat(chat)
                    }, [
                      vue.createElementVNode("image", {
                        class: "avatar",
                        src: chat.avatar || "../../static/default_group_avater.png"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "chat-content" }, [
                        vue.createElementVNode("view", { class: "chat-header" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "username" },
                            vue.toDisplayString(chat.username),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            { class: "time" },
                            vue.toDisplayString(chat.time),
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode("view", { class: "message-preview" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "message" },
                            vue.toDisplayString(chat.lastMessage),
                            1
                            /* TEXT */
                          ),
                          chat.unreadCount > 0 ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 0,
                              class: "unread-count"
                            },
                            vue.toDisplayString(chat.unreadCount),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true)
                        ])
                      ])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 隐藏的Canvas用于生成群聊头像 "),
            vue.createElementVNode("canvas", {
              "canvas-id": "groupAvatarCanvas",
              style: { "position": "absolute", "left": "-9999px", "width": "100px", "height": "100px" }
            })
          ])
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const PagesIndexChatlist = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-c2d98f75"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/chatlist.vue"]]);
  const _imports_1$3 = "/static/close.png";
  const _imports_1$2 = "/static/clock.png";
  const _imports_1$1 = "/static/start.png";
  const _imports_2$2 = "/static/dest.png";
  const _sfc_main$g = {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      amount: {
        type: Number,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit("close");
      }
    },
    mounted() {
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.isVisible ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "modal"
    }, [
      vue.createElementVNode("view", { class: "modal-content" }, [
        vue.createElementVNode("view", { class: "modal-header" }, [
          vue.createElementVNode(
            "text",
            null,
            "请支付 " + vue.toDisplayString($props.amount) + " 元",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "modal-body" }, [
          vue.createElementVNode("img", {
            src: _imports_0$3,
            class: "qr-code",
            alt: "QR Code"
          })
        ]),
        vue.createElementVNode("view", { class: "modal-footer" }, [
          vue.createElementVNode("button", {
            class: "close-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.closeModal && $options.closeModal(...args))
          }, "关闭")
        ])
      ])
    ])) : vue.createCommentVNode("v-if", true);
  }
  const OrderInvite = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-91acc05e"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/components/OrderInvite.vue"]]);
  const _imports_0$4 = "/static/back.png";
  const _imports_2$1 = "/static/photo.png";
  const _imports_3$1 = "/static/send.png";
  const _imports_4 = "/static/icon-order.png";
  const _sfc_main$f = {
    components: {
      NavigationBar,
      PaymentModal
    },
    data() {
      return {
        mapContext: null,
        centerLng: 121.214345,
        centerLat: 31.285985,
        trips: [{
          id: 1,
          date: "3月7日14:30",
          startPoint: "同济大学（四平校区）",
          endPoint: "四平路地铁站",
          price: 41,
          carType: "奔驰 奔驰EQC",
          orderCount: 15,
          userAvatar: "../../static/user.jpeg",
          state: "待评价"
          // 修改为待评价状态用于测试
        }],
        showPaymentModal: false,
        showRateModal: false,
        currentRating: 0,
        markers: [],
        polyline: []
      };
    },
    mounted() {
      this.initMap();
      this.drawRoute();
      this.geocodeAddress();
    },
    methods: {
      initMap() {
        this.mapContext = uni.createMapContext("uni-map");
      },
      async drawRoute() {
        const trip = this.trips[0];
        const {
          startPoint,
          endPoint
        } = trip;
        formatAppLog("log", "at pages/index/trip_info.vue:120", startPoint);
        formatAppLog("log", "at pages/index/trip_info.vue:121", endPoint);
        const [startPos, endPos] = await Promise.all([
          this.transFormAddress(startPoint),
          this.transFormAddress(endPoint)
        ]);
        if (!startPos || !endPos) {
          formatAppLog("error", "at pages/index/trip_info.vue:129", "地址解析失败");
          return;
        }
        formatAppLog("log", "at pages/index/trip_info.vue:132", startPos);
        formatAppLog("log", "at pages/index/trip_info.vue:133", endPos);
        this.centerLng = startPos[0];
        this.centerLat = startPos[1];
        this.markers = [
          {
            id: 1,
            latitude: startPos[1],
            longitude: startPos[0],
            title: "起点",
            iconPath: "../../static/start.png",
            width: 20,
            height: 20
          },
          {
            id: 2,
            latitude: endPos[1],
            longitude: endPos[0],
            title: "终点",
            iconPath: "../../static/dest.png",
            width: 20,
            height: 20
          }
        ];
        return replies[Math.floor(Math.random() * replies.length)];
      },
      scrollToBottom() {
        setTimeout(() => {
          uni.pageScrollTo({
            scrollTop: 99999,
            duration: 300
          });
        }, 100);
      },
      // 订单相关方法
      showOrderPopup() {
        this.selectedOrderId = null;
        this.showOrderPopupFlag = true;
      },
      closeOrderPopup() {
        this.showOrderPopupFlag = false;
      },
      switchOrderType(type) {
        this.orderType = type;
        this.selectedOrderId = null;
      },
      previewImage(src) {
        this.previewImageSrc = src;
        this.isPreviewing = true;
      },
      closePreview() {
        this.isPreviewing = false;
      },
      getAvailableOrders() {
        this.driverOrders = [
          {
            id: 1,
            start_loc: "同济大学（嘉定校区）",
            dest_loc: "同济大学（四平校区）",
            time: "今天 14:30",
            status: "待出发",
            role: "driver",
            username: this.username
          },
          {
            id: 2,
            start_loc: "嘉定新城地铁站",
            dest_loc: "虹桥机场",
            time: "明天 08:00",
            status: "待出发",
            role: "driver",
            username: this.username
          }
        ];
        this.passengerOrders = [
          {
            id: 101,
            start_loc: "人民广场",
            dest_loc: "浦东机场",
            time: "后天 10:00",
            status: "寻找司机",
            role: "passenger",
            username: this.other_username
            // 使用对方用户名
          },
          {
            id: 102,
            start_loc: "静安寺",
            dest_loc: "虹桥火车站",
            time: "大后天 15:30",
            status: "寻找司机",
            role: "passenger",
            username: this.other_username
            // 使用对方用户名
          }
        ];
      },
      selectOrder(order) {
        this.selectedOrderId = order.id;
      },
      sendInvite() {
        if (!this.selectedOrderId)
          return;
        const allOrders = [...this.driverOrders, ...this.passengerOrders];
        const order = allOrders.find((o2) => o2.id === this.selectedOrderId);
        if (order) {
          this.invites.push({
            ...order,
            type: "invite",
            // 添加发起者信息
            inviter: order.role === "driver" ? this.username : this.other_username,
            inviter_avatar: order.role === "driver" ? this.userAvatar : this.otherAvatar
          });
          this.closeOrderPopup();
          this.scrollToBottom();
          uni.showToast({
            title: "邀请已发送",
            icon: "success"
          });
        }
      },
      showRatingModal() {
        this.showRateModal = true;
        this.currentRating = 0;
      },
      setRating(rating) {
        if (this.currentRating === rating) {
          this.currentRating = 0;
        } else {
          this.currentRating = rating;
        }
      },
      cancelRating() {
        this.showRateModal = false;
      },
      submitRating() {
        formatAppLog("log", "at pages/index/trip_info.vue:267", "提交评价:", this.currentRating);
        uni.showToast({
          title: `感谢您的评价: ${this.currentRating}星`,
          icon: "success"
        });
        this.showRateModal = false;
        this.trips[0].state = "已完成";
      },
      applyToJoin(tripId) {
      },
      closePaymentModal() {
        this.showPaymentModal = false;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_OrderInvite = vue.resolveComponent("OrderInvite");
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex-col page" }, [
      vue.createElementVNode("view", {
        class: "flex-row align-items-center section",
        style: { "position": "relative", "height": "30px" }
      }, [
        vue.createElementVNode("image", {
          class: "back",
          src: _imports_0$4,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "font text ml-39-5",
            style: { "color": "white", "font-size": "20px" }
          },
          vue.toDisplayString($data.other_username),
          1
          /* TEXT */
        ),
        vue.createElementVNode("image", {
          class: "otherAvatar",
          src: $data.otherAvatar,
          style: { "position": "absolute", "right": "70rpx" }
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", {
        class: "order-scroll",
        "scroll-y": "true",
        style: { "height": "calc(100vh - 200px)" }
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.messages, (message, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: index,
                class: vue.normalizeClass(["flex-row", message.sender === "user" ? "justify-end" : "justify-start"]),
                style: { "display": "flex", "width": "100%", "align-items": "center" }
              },
              [
                vue.createCommentVNode(" 对方消息：头像在左，气泡在右 "),
                message.sender === "other" ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createElementVNode("view", { class: "avatar-container" }, [
                      vue.createElementVNode("image", {
                        class: "otherAvatar",
                        src: $data.otherAvatar
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "message-bubble message-bubble-other" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "font text" },
                        vue.toDisplayString(message.content),
                        1
                        /* TEXT */
                      ),
                      message.image ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        src: message.image,
                        style: { "width": "200rpx", "height": "200rpx", "margin-top": "10rpx" },
                        mode: "aspectFill",
                        onClick: ($event) => $options.previewImage(message.image)
                      }, null, 8, ["src", "onClick"])) : vue.createCommentVNode("v-if", true)
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 用户消息：气泡在左，头像在右 "),
                    vue.createElementVNode("view", { class: "message-bubble message-bubble-user" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "font text" },
                        vue.toDisplayString(message.content),
                        1
                        /* TEXT */
                      ),
                      message.image ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        src: message.image,
                        style: { "width": "200rpx", "height": "200rpx", "margin-top": "10rpx" },
                        mode: "aspectFill",
                        onClick: ($event) => $options.previewImage(message.image)
                      }, null, 8, ["src", "onClick"])) : vue.createCommentVNode("v-if", true)
                    ]),
                    vue.createElementVNode("view", { class: "avatar-container" }, [
                      vue.createElementVNode("image", {
                        class: "userAvatar",
                        src: $data.userAvatar
                      }, null, 8, ["src"])
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createCommentVNode(" 拼车邀请消息 "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.invites, (invite, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "invite-" + index,
              class: "flex-row justify-end",
              style: { "display": "flex", "width": "100%", "align-items": "center" }
            }, [
              vue.createElementVNode("view", {
                class: "message-bubble message-bubble-user",
                onClick: ($event) => $options.showInvitePopup(invite)
              }, [
                vue.createElementVNode("text", { class: "font text" }, "拼车邀请"),
                vue.createElementVNode("view", { style: { "margin-top": "10rpx", "padding": "10rpx", "background-color": "#f0f8ff", "border-radius": "10rpx" } }, [
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "12px", "color": "black" } },
                    vue.toDisplayString(invite.start_loc) + " → " + vue.toDisplayString(invite.dest_loc),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "12px", "color": "black" } },
                    "时间: " + vue.toDisplayString(invite.time),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "12px", "color": "#666", "display": "block", "margin-top": "5rpx" } },
                    vue.toDisplayString(invite.role === "driver" ? "我发起的司机订单" : "对方发起的乘客订单"),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["onClick"]),
              vue.createElementVNode("view", { class: "avatar-container" }, [
                vue.createElementVNode("image", {
                  class: "userAvatar",
                  src: $data.userAvatar
                }, null, 8, ["src"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 订单选择弹窗 "),
      $data.showOrderPopupFlag ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "custom-popup-mask",
        onClick: _cache[6] || (_cache[6] = (...args) => $options.closeOrderPopup && $options.closeOrderPopup(...args))
      }, [
        vue.createElementVNode("view", {
          class: "custom-popup-content",
          onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode("view", { class: "popup-header" }, [
            vue.createElementVNode("text", { style: { "font-size": "16px", "font-weight": "bold" } }, "选择拼车订单"),
            vue.createElementVNode("image", {
              src: _imports_1$3,
              onClick: _cache[1] || (_cache[1] = (...args) => $options.closeOrderPopup && $options.closeOrderPopup(...args)),
              style: { "width": "40rpx", "height": "40rpx" }
            })
          ]),
          vue.createCommentVNode(" 订单类型切换 "),
          vue.createElementVNode("view", { class: "order-type-tabs" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["order-type-tab", { active: $data.orderType === "driver" }]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.switchOrderType("driver"))
              },
              " 我的订单(司机) ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["order-type-tab", { active: $data.orderType === "passenger" }]),
                onClick: _cache[3] || (_cache[3] = ($event) => $options.switchOrderType("passenger"))
              },
              " 对方订单(乘客) ",
              2
              /* CLASS */
            )
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            style: { "height": "60vh", "margin-top": "20rpx" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredOrders, (order, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["order-item", { "selected-order": $data.selectedOrderId === order.id }]),
                  onClick: ($event) => $options.selectOrder(order)
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "order-text" },
                    vue.toDisplayString(order.start_loc) + " → " + vue.toDisplayString(order.dest_loc),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "order-time" },
                    "发车时间: " + vue.toDisplayString(order.time),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "order-status" },
                    "状态: " + vue.toDisplayString(order.status),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "order-role" },
                    vue.toDisplayString(order.role === "driver" ? "(我的司机订单)" : "(对方乘客订单)"),
                    1
                    /* TEXT */
                  )
                ], 10, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            $options.filteredOrders.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "empty-tip"
            }, [
              vue.createElementVNode("text", null, "暂无可用订单")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          $data.selectedOrderId ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            class: "send-btn",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.sendInvite && $options.sendInvite(...args))
          }, " 发送邀请 ")) : vue.createCommentVNode("v-if", true)
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 拼车邀请详情弹窗 "),
      $data.showInvite ? (vue.openBlock(), vue.createBlock(_component_OrderInvite, {
        key: 1,
        isVisible: $data.showInvite,
        username: $data.currentInvite.role === "driver" ? $data.username : $data.other_username,
        time: $data.currentInvite.time,
        start_loc: $data.currentInvite.start_loc,
        dest_loc: $data.currentInvite.dest_loc,
        username_2: $data.currentInvite.role === "driver" ? $data.other_username : $data.username,
        avatar_url: $data.currentInvite.role === "driver" ? $data.userAvatar : $data.otherAvatar,
        onClose: $options.closeInvitePopup
      }, null, 8, ["isVisible", "username", "time", "start_loc", "dest_loc", "username_2", "avatar_url", "onClose"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "flex-row items-center section_4" }, [
        vue.createElementVNode("image", {
          class: "photo",
          src: _imports_2$1,
          onClick: _cache[7] || (_cache[7] = (...args) => $options.chooseImage && $options.chooseImage(...args))
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "ml-20 flex-1 input_mes",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.inputMessage = $event),
            placeholder: "输入消息...",
            focus: "",
            onFocus: _cache[9] || (_cache[9] = (...args) => $options.focusInput && $options.focusInput(...args)),
            onBlur: _cache[10] || (_cache[10] = (...args) => $options.blurInput && $options.blurInput(...args))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $data.inputMessage]
        ]),
        vue.createElementVNode("image", {
          class: "send",
          src: _imports_3$1,
          onClick: _cache[11] || (_cache[11] = (...args) => $options.sendMessage && $options.sendMessage(...args))
        }),
        vue.createElementVNode("image", {
          class: "order",
          src: _imports_4,
          onClick: _cache[12] || (_cache[12] = (...args) => $options.showOrderPopup && $options.showOrderPopup(...args))
        })
      ]),
      vue.createCommentVNode(" 全屏显示图片 "),
      $data.isPreviewing ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "preview-container",
        onClick: _cache[13] || (_cache[13] = (...args) => $options.closePreview && $options.closePreview(...args))
      }, [
        vue.createElementVNode("image", {
          class: "preview-image",
          src: $data.previewImageSrc,
          mode: "widthFix"
        }, null, 8, ["src"])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexChat = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-8595e4ae"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/chat.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        credentials: {
          username: "",
          password: ""
        },
        showWelcome: true
        // 控制显示欢迎界面
      };
    },
    mounted() {
      setTimeout(() => {
        this.showWelcome = false;
      }, 5e3);
    },
    methods: {
      login() {
        uni.navigateTo({
          url: "/pages/index/home"
          // 登录成功后的跳转
        });
      },
      goToRegister() {
        uni.navigateTo({
          url: "/pages/index/register"
          // 跳转到注册页面
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createCommentVNode(" 欢迎界面 "),
      $data.showWelcome ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "welcome-screen"
      })) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 登录界面 "),
      !$data.showWelcome ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "container"
      }, [
        vue.createElementVNode("view", { class: "card" }, [
          vue.createElementVNode("view", { class: "card-title" }, "用户登录"),
          vue.createElementVNode("view", { class: "card-body" }, [
            vue.createElementVNode("view", { class: "input-group" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.credentials.username = $event),
                  placeholder: "请输入用户名",
                  type: "text",
                  class: "input"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.credentials.username]
              ])
            ]),
            vue.createElementVNode("view", { class: "input-group" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.credentials.password = $event),
                  placeholder: "请输入密码",
                  type: "password",
                  class: "input"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.credentials.password]
              ])
            ]),
            vue.createElementVNode("view", { class: "button-group" }, [
              vue.createElementVNode("button", {
                class: "primary-button",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args))
              }, "登录")
            ]),
            vue.createElementVNode("view", { class: "register-link" }, [
              vue.createElementVNode("button", {
                class: "default-button",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.goToRegister && $options.goToRegister(...args))
              }, "没有账号？去注册")
            ])
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexLogin = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-fa14255b"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/login.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        user: {
          username: "",
          true_username: "",
          identity_num: "",
          gender: "",
          telephone: "",
          password: "",
          confirmPassword: ""
        },
        genderList: [
          { name: "男", value: "男" },
          { name: "女", value: "女" }
        ],
        selectedGender: null
      };
    },
    methods: {
      handleGenderChange(event) {
        const selectedGenderIndex = event.detail.value;
        this.selectedGender = this.genderList[selectedGenderIndex];
        this.user.gender = this.selectedGender.value;
      },
      register() {
        if (this.user.username && this.user.true_username && this.user.identity_num && this.user.gender && this.user.telephone && this.user.password && this.user.password === this.user.confirmPassword) {
          authApi.register({
            username: this.user.username,
            realname: this.user.true_username,
            identity_id: this.user.identity_num,
            gender: this.user.gender,
            telephone: this.user.telephone,
            password: this.user.password
          }).then((res) => {
            formatAppLog("log", "at pages/index/register.vue:155", "注册成功", res);
            this.goToLogin();
          }).catch((err) => {
            formatAppLog("log", "at pages/index/register.vue:158", "注册失败：", err);
          });
        } else {
          uni.showToast({
            title: "请填写所有必填项，并确保两次密码一致！",
            icon: "none"
          });
        }
      },
      goToLogin() {
        uni.navigateTo({
          url: "/pages/index/login"
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-title text-h5" }, "用户注册"),
        vue.createElementVNode("view", { class: "card-body" }, [
          vue.createElementVNode(
            "form",
            { ref: "form" },
            [
              vue.createCommentVNode(" 用户名 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "username" }, "用户名"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "username",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.user.username = $event),
                    type: "text",
                    class: "input",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.user.username]
                ])
              ]),
              vue.createCommentVNode(" 真实姓名 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "true_username" }, "真实姓名"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "true_username",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.user.true_username = $event),
                    type: "text",
                    class: "input",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.user.true_username]
                ])
              ]),
              vue.createCommentVNode(" 身份证号 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "identity_num" }, "身份证号"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "identity_num",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.user.identity_num = $event),
                    type: "text",
                    class: "input",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.user.identity_num]
                ])
              ]),
              vue.createCommentVNode(" 性别选择 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "gender" }, "性别"),
                vue.createElementVNode("picker", {
                  mode: "selector",
                  range: $data.genderList,
                  "range-key": "name",
                  onChange: _cache[3] || (_cache[3] = (...args) => $options.handleGenderChange && $options.handleGenderChange(...args)),
                  class: "info-picker"
                }, [
                  vue.createElementVNode(
                    "view",
                    { class: "picker-text" },
                    vue.toDisplayString($data.selectedGender ? $data.selectedGender.name : "请选择性别"),
                    1
                    /* TEXT */
                  )
                ], 40, ["range"])
              ]),
              vue.createCommentVNode(" 电话号码 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "telephone" }, "电话号码"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "telephone",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.user.telephone = $event),
                    type: "text",
                    class: "input",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.user.telephone]
                ])
              ]),
              vue.createCommentVNode(" 密码 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "password" }, "密码"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "password",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.user.password = $event),
                    type: "password",
                    class: "input",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.user.password]
                ])
              ]),
              vue.createCommentVNode(" 确认密码 "),
              vue.createElementVNode("div", { class: "input-group" }, [
                vue.createElementVNode("label", { for: "confirmPassword" }, "确认密码"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "confirmPassword",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.user.confirmPassword = $event),
                    type: "password",
                    class: "input",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.user.confirmPassword]
                ])
              ]),
              vue.createCommentVNode(" 注册按钮 "),
              vue.createElementVNode("div", { class: "button-group" }, [
                vue.createElementVNode("button", {
                  class: "primary-button",
                  onClick: _cache[7] || (_cache[7] = vue.withModifiers((...args) => $options.register && $options.register(...args), ["prevent"]))
                }, " 注册 ")
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ]),
        vue.createElementVNode("view", { class: "register-link" }, [
          vue.createElementVNode("button", {
            class: "default-button",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.goToLogin && $options.goToLogin(...args))
          }, " 已有账号？去登录 ")
        ])
      ])
    ]);
  }
  const PagesIndexRegister = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-224dede7"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/register.vue"]]);
  const _sfc_main$c = {
    components: {
      NavigationBar
    },
    data() {
      return {
        user: {
          avatar: "/static/user.jpeg",
          name: "jyd777",
          age: 20,
          gender: "女"
        },
        userCars: [],
        showModal: false,
        modalTitle: "添加车牌",
        submitButtonText: "确定",
        isEditing: false,
        editingPlateNumber: "",
        provinces: ["沪", "京", "津", "渝", "冀", "晋", "辽", "吉", "黑", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "琼", "川", "贵", "云", "陕", "甘", "青", "蒙", "桂", "宁", "新", "藏", "港", "澳"],
        lettersNumbers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
        plateInputs: Array(7).fill(""),
        plateColor: "blue",
        colorOptions: ["蓝牌", "黄牌", "白牌", "黑牌", "绿牌", "黄绿牌", "临牌"],
        colorMap: {
          blue: "#1E90FF",
          yellow: "#FFD700",
          white: "#FFFFFF",
          black: "#000000",
          green: "#32CD32",
          "yellow-green": "#ADFF2F",
          temporary: "#FFA500"
        },
        isLoading: false,
        seatCount: 4
      };
    },
    mounted() {
      this.fetchUserCars();
    },
    methods: {
      // 颜色选择变化
      onColorChange(e) {
        const colorKeys = Object.keys(this.colorMap);
        this.plateColor = colorKeys[e.detail.value];
      },
      // 省份选择变化
      onProvinceChange(e) {
        this.plateInputs[0] = this.provinces[e.detail.value];
      },
      // 字母选择变化
      onLetterChange(e) {
        this.plateInputs[1] = this.lettersNumbers[e.detail.value];
      },
      getColorName(colorName) {
        const map = {
          "yellow-green": "黄绿牌",
          "temporary": "临牌",
          "blue": "蓝牌",
          "yellow": "黄牌",
          "white": "白牌",
          "black": "黑牌",
          "green": "绿牌"
        };
        return map[colorName] || colorName + "牌";
      },
      openAddPlateModal() {
        this.modalTitle = "添加车牌";
        this.submitButtonText = "确定";
        this.isEditing = false;
        this.showModal = true;
      },
      openEditModal(plate) {
        this.modalTitle = "修改车辆信息";
        this.submitButtonText = "保存";
        this.isEditing = true;
        this.editingPlateNumber = plate.number;
        this.plateInputs = [
          plate.number.substring(0, 1),
          // 省份
          plate.number.substring(1, 2),
          // 字母
          ...plate.number.substring(2).split("")
          // 剩余字符
        ];
        this.plateColor = plate.color;
        this.carModel = plate.model || "";
        this.seatCount = plate.seats || 4;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.resetPlateForm();
      },
      resetPlateForm() {
        this.plateInputs = Array(7).fill("");
        this.plateColor = "blue";
        this.carModel = "";
        this.seatCount = 4;
        this.isEditing = false;
        this.editingPlateNumber = "";
      },
      async fetchUserCars() {
        this.isLoading = true;
        try {
          const userId = uni.getStorageSync("user_id");
          const res = await fetchCars(userId);
          formatAppLog("log", "at pages/index/car_manage.vue:235", "fetch car res", res);
          if (!res || typeof res !== "object") {
            this.userCars = [];
            formatAppLog("log", "at pages/index/car_manage.vue:240", "没有车辆数据或数据格式不正确");
            return;
          }
          const carsArray = Object.values(res);
          this.userCars = carsArray.map((car) => ({
            car_id: car.car_id,
            number: car.plate_number,
            model: car.brand_model,
            color: car.color || "blue",
            // 默认颜色
            seats: car.seats || 4
            // 默认座位数
          }));
          formatAppLog("log", "at pages/index/car_manage.vue:256", this.userCars);
          if (this.userCars.length === 0) {
            uni.showToast({
              title: "您还没有添加车辆，请点击下方按钮添加",
              icon: "none",
              duration: 3e3
            });
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/car_manage.vue:267", "获取车辆列表失败:", error2);
          this.userCars = [];
          uni.showToast({
            title: "获取车辆列表失败，请稍后重试",
            icon: "none",
            duration: 2e3
          });
        } finally {
          this.isLoading = false;
        }
      },
      // 新的按钮点击处理方法
      handleButtonClick() {
        if (!this.validateForm()) {
          return;
        }
        if (this.isEditing) {
          this.updatePlate();
        } else {
          this.addPlate();
        }
      },
      // 表单验证方法
      validateForm() {
        const plateNumber = this.plateInputs.join("");
        if (!validatePlateNumber(plateNumber)) {
          uni.showToast({
            title: "请输入有效的车牌号",
            icon: "none",
            duration: 2e3
          });
          return false;
        }
        if (!this.plateColor || !this.carModel || !this.seatCount) {
          uni.showToast({
            title: "请填写完整信息",
            icon: "none",
            duration: 2e3
          });
          return false;
        }
        return true;
      },
      // 修改 addPlate 方法
      async addPlate() {
        const plateNumber = this.plateInputs.join("");
        if (!validatePlateNumber(plateNumber)) {
          uni.showToast({
            title: "请输入有效的车牌号",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        this.isLoading = true;
        try {
          const userId = uni.getStorageSync("user_id");
          const res = await addCar(userId, {
            number: plateNumber,
            color: this.plateColor,
            model: this.carModel,
            seats: this.seatCount
          });
          let failMsg = "车辆信息不匹配";
          formatAppLog("log", "at pages/index/car_manage.vue:345", res.message);
          if (res.message === "车辆信息不匹配") {
            failMsg = "车辆信息不匹配";
            uni.showToast({
              title: failMsg,
              icon: "none",
              duration: 2e3
            });
          } else {
            let successMsg = "添加成功";
            if (res.message === "关联成功") {
              successMsg = "关联成功";
            } else if (res.message === "车辆已关联") {
              successMsg = "该车辆已关联";
            }
            uni.showToast({
              title: successMsg,
              icon: "success",
              duration: 2e3
            });
            await this.fetchUserCars();
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/car_manage.vue:370", "操作失败:", error2);
          uni.showToast({
            title: "操作失败，请稍后重试",
            icon: "none",
            duration: 2e3
          });
        } finally {
          this.closeModal();
          this.isLoading = false;
        }
      },
      // 修改 updatePlate 方法
      async updatePlate() {
        const plateNumber = this.plateInputs.join("");
        if (!validatePlateNumber(plateNumber)) {
          uni.showToast({
            title: "请输入有效的车牌号",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        this.isLoading = true;
        try {
          const userId = uni.getStorageSync("user_id");
          const res = await updateCar(userId, this.editingPlateNumber, {
            number: plateNumber,
            color: this.plateColor,
            model: this.carModel,
            seats: this.seatCount
          });
          let failMsg = "车辆信息不匹配";
          formatAppLog("log", "at pages/index/car_manage.vue:406", res.message);
          if (res.message === "车辆信息不匹配") {
            failMsg = "车辆信息不匹配";
            uni.showToast({
              title: failMsg,
              icon: "none",
              duration: 2e3
            });
          } else {
            let successMsg = "修改成功";
            if (res.message === "合并成功") {
              successMsg = "车辆信息已合并";
            }
            formatAppLog("log", "at pages/index/car_manage.vue:419", "ok");
            uni.showToast({
              title: successMsg,
              icon: "success",
              duration: 2e3
            });
            await this.fetchUserCars();
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/car_manage.vue:429", "修改车牌失败:", error2);
          uni.showToast({
            title: "操作失败，请稍后重试",
            icon: "none",
            duration: 2e3
          });
        } finally {
          this.closeModal();
          this.isLoading = false;
        }
      },
      // 修改 unbindCar 方法
      unbindCar(plateNumber) {
        uni.showModal({
          title: "提示",
          content: "确定要解绑车牌吗？",
          success: async (res) => {
            if (res.confirm) {
              this.isLoading = true;
              try {
                const userId = uni.getStorageSync("user_id");
                const response = await unbindCar(userId, plateNumber);
                if (response.code === 200) {
                  uni.showToast({
                    title: "解绑成功",
                    icon: "success",
                    duration: 2e3
                  });
                  await this.fetchUserCars();
                } else {
                  uni.showToast({
                    title: response.message || "解绑失败",
                    icon: "none",
                    duration: 2e3
                  });
                }
              } catch (error2) {
                formatAppLog("error", "at pages/index/car_manage.vue:468", "解绑车牌失败:", error2);
                uni.showToast({
                  title: "操作失败，请稍后重试",
                  icon: "none",
                  duration: 2e3
                });
              } finally {
                this.isLoading = false;
              }
            }
          }
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock("div", { class: "user-profile-container" }, [
      vue.createVNode(_component_NavigationBar),
      vue.createCommentVNode(" 车牌信息卡片 "),
      vue.createElementVNode("div", { class: "car-info-card" }, [
        vue.createElementVNode("div", { class: "car-scroll" }, [
          vue.createCommentVNode(" 已登记的车牌列表 "),
          vue.createElementVNode("div", { id: "plateList" }, [
            $data.userCars.length === 0 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "no-plate-tip"
            }, [
              vue.createElementVNode("text", null, "暂无绑定车牌")
            ])) : vue.createCommentVNode("v-if", true),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.userCars, (plate) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "plate-item",
                  key: plate.number
                }, [
                  vue.createElementVNode("div", { class: "plate-info" }, [
                    vue.createElementVNode("i", { class: "fa-solid fa-car" }),
                    vue.createElementVNode(
                      "span",
                      {
                        class: "plate-number",
                        style: { "font-weight": "bold" }
                      },
                      vue.toDisplayString(plate.number),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "span",
                      {
                        class: "color-badge",
                        style: vue.normalizeStyle({
                          backgroundColor: $data.colorMap[plate.color] || plate.color,
                          border: "2px solid rgb(100, 100, 100)"
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    ),
                    plate.model ? (vue.openBlock(), vue.createElementBlock(
                      "span",
                      {
                        key: 0,
                        class: "car-model"
                      },
                      vue.toDisplayString(plate.model),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createElementVNode("div", { class: "plate-actions" }, [
                    vue.createElementVNode("button", {
                      class: "edit-button",
                      onClick: ($event) => $options.openEditModal(plate)
                    }, "修改", 8, ["onClick"]),
                    vue.createElementVNode("button", {
                      class: "unbind-button",
                      onClick: ($event) => $options.unbindCar(plate.number)
                    }, "解绑", 8, ["onClick"])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createCommentVNode(" 添加车牌按钮 "),
        vue.createElementVNode("button", {
          class: "add-plate-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openAddPlateModal && $options.openAddPlateModal(...args))
        }, "添加车牌")
      ]),
      vue.createCommentVNode(" 添加车牌模态窗口 "),
      $data.showModal ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "modal"
      }, [
        vue.createElementVNode("div", { class: "modal-content" }, [
          vue.createElementVNode("span", {
            class: "close",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.closeModal && $options.closeModal(...args))
          }, "×"),
          vue.createElementVNode(
            "h2",
            { style: { "margin-bottom": "20px" } },
            vue.toDisplayString($data.modalTitle),
            1
            /* TEXT */
          ),
          vue.createElementVNode("div", { class: "form-container" }, [
            vue.createElementVNode("div", { class: "form-group" }, [
              vue.createElementVNode("label", { for: "plateNumber" }, "车牌号码:"),
              vue.createElementVNode("div", { class: "plate-input-group" }, [
                vue.createElementVNode("picker", {
                  mode: "selector",
                  range: $data.provinces,
                  onChange: _cache[2] || (_cache[2] = (...args) => $options.onProvinceChange && $options.onProvinceChange(...args)),
                  class: "plate-picker"
                }, [
                  vue.createElementVNode(
                    "div",
                    { class: "picker-content" },
                    vue.toDisplayString($data.plateInputs[0] || "省份"),
                    1
                    /* TEXT */
                  )
                ], 40, ["range"]),
                vue.createCommentVNode(" 字母选择器 "),
                vue.createElementVNode("picker", {
                  mode: "selector",
                  range: $data.lettersNumbers,
                  onChange: _cache[3] || (_cache[3] = (...args) => $options.onLetterChange && $options.onLetterChange(...args)),
                  class: "plate-picker"
                }, [
                  vue.createElementVNode(
                    "div",
                    { class: "picker-content" },
                    vue.toDisplayString($data.plateInputs[1] || "字母"),
                    1
                    /* TEXT */
                  )
                ], 40, ["range"]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.plateInputs[2] = $event),
                    class: "plate-input",
                    maxlength: "1",
                    pattern: "[A-Z0-9]",
                    placeholder: "A",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.plateInputs[2]]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.plateInputs[3] = $event),
                    class: "plate-input",
                    maxlength: "1",
                    pattern: "[A-Z0-9]",
                    placeholder: "1",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.plateInputs[3]]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.plateInputs[4] = $event),
                    class: "plate-input",
                    maxlength: "1",
                    pattern: "[A-Z0-9]",
                    placeholder: "2",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.plateInputs[4]]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.plateInputs[5] = $event),
                    class: "plate-input",
                    maxlength: "1",
                    pattern: "[A-Z0-9]",
                    placeholder: "3",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.plateInputs[5]]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.plateInputs[6] = $event),
                    class: "plate-input",
                    maxlength: "1",
                    pattern: "[A-Z0-9]",
                    placeholder: "4",
                    required: ""
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.plateInputs[6]]
                ])
              ])
            ]),
            vue.createElementVNode("div", { class: "form-group" }, [
              vue.createElementVNode("label", { for: "plateColor" }, "车牌颜色:"),
              vue.createElementVNode("picker", {
                mode: "selector",
                range: $data.colorOptions,
                onChange: _cache[9] || (_cache[9] = (...args) => $options.onColorChange && $options.onColorChange(...args)),
                class: "color-picker"
              }, [
                vue.createElementVNode("div", { class: "picker-content" }, [
                  vue.createCommentVNode(" 移除动态颜色样式 "),
                  vue.createTextVNode(
                    " " + vue.toDisplayString($options.getColorName($data.plateColor) || "选择颜色"),
                    1
                    /* TEXT */
                  )
                ])
              ], 40, ["range"])
            ]),
            vue.createElementVNode("div", { class: "form-group" }, [
              vue.createElementVNode("label", { for: "carModel" }, "车辆型号:"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.carModel = $event),
                  id: "carModel",
                  class: "color-select",
                  placeholder: "请输入车辆型号",
                  required: ""
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, _ctx.carModel]
              ])
            ]),
            vue.createElementVNode("div", { class: "form-group" }, [
              vue.createElementVNode("label", { for: "seatCount" }, "座位数量:"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "number",
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.seatCount = $event),
                  id: "seatCount",
                  class: "color-select",
                  min: "1",
                  max: "20",
                  placeholder: "请输入座位数",
                  required: "",
                  onKeypress: _cache[12] || (_cache[12] = (...args) => _ctx.validateNumberInput && _ctx.validateNumberInput(...args))
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [
                  vue.vModelText,
                  $data.seatCount,
                  void 0,
                  { number: true }
                ]
              ])
            ]),
            vue.createElementVNode(
              "button",
              {
                class: "confirm-btn",
                onClick: _cache[13] || (_cache[13] = (...args) => $options.handleButtonClick && $options.handleButtonClick(...args))
              },
              vue.toDisplayString($data.submitButtonText),
              1
              /* TEXT */
            )
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexCarManage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-f62f82f0"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/car_manage.vue"]]);
  const _imports_0$3 = "/static/arrow-down.png";
  const _sfc_main$b = {
    data() {
      return {
        statusOptions: [
          { name: "全部", value: "all" },
          { name: "待审核", value: "pending" },
          { name: "已通过", value: "approved" },
          { name: "已拒绝", value: "rejected" }
        ],
        statusIndex: 1,
        // 默认显示待审核
        typeOptions: [
          { name: "全部", value: "all" },
          { name: "乘客", value: "passenger" },
          { name: "车主", value: "driver" }
        ],
        typeIndex: 0,
        years: ["", "2023", "2024", "2025"],
        yearIndex: 0,
        months: ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        monthIndex: 0,
        days: ["", ...Array.from({ length: 31 }, (_2, i2) => (i2 + 1).toString())],
        dayIndex: 0,
        orders: [
          {
            id: 1,
            type: "passenger",
            status: "pending",
            date: "2023年3月7日14:30",
            startPoint: "创新港(2号)停车场",
            endPoint: "上海市·台铃电动车(文汇路店)",
            price: 41,
            carType: "宝马 宝马5系",
            publisher: "张先生",
            userAvatar: "../../static/user.jpeg"
          },
          {
            id: 2,
            type: "driver",
            status: "pending",
            date: "2025年3月8日08:35",
            startPoint: "纪丰路327号3号楼",
            endPoint: "苏州市·苏州大学附属理想眼科医院",
            price: 62,
            carType: "宝马 宝马3系",
            publisher: "李女士",
            userAvatar: "../../static/user.jpeg"
          },
          {
            id: 3,
            type: "driver",
            status: "approved",
            date: "2024年3月7日17:05",
            startPoint: "汉庭酒店(上海安亭汽车城)",
            endPoint: "南通市·丝绸路与通源路交叉口",
            price: 87,
            carType: "宝马 宝马5系",
            publisher: "王先生",
            userAvatar: "../../static/user.jpeg"
          },
          {
            id: 4,
            type: "passenger",
            status: "rejected",
            date: "2024年3月10日09:20",
            startPoint: "上海交通大学闵行校区",
            endPoint: "浦东国际机场",
            price: 120,
            carType: "宝马 宝马5系",
            publisher: "赵同学",
            rejectReason: "出发时间已过期",
            userAvatar: "../../static/user.jpeg"
          }
        ]
      };
    },
    computed: {
      filteredOrders() {
        let filtered = this.orders;
        return filtered;
      }
    },
    methods: {
      getStatusClass(status) {
        return {
          "status-pending": status === "pending",
          "status-approved": status === "approved",
          "status-rejected": status === "rejected"
        };
      },
      getStatusText(status) {
        const map = {
          "pending": "待审核",
          "approved": "已通过",
          "rejected": "已拒绝"
        };
        return map[status] || status;
      },
      onStatusChange(e2) {
        this.statusIndex = e2.detail.value;
      },
      onTypeChange(e2) {
        this.typeIndex = e2.detail.value;
      },
      onYearChange(e2) {
        this.yearIndex = e2.detail.value;
        this.monthIndex = 0;
      },
      onMonthChange(e2) {
        this.monthIndex = e2.detail.value;
      },
      approveOrder(orderId) {
        const order = this.orders.find((o2) => o2.id === orderId);
        if (order) {
          order.status = "approved";
          uni.showToast({
            title: "已通过审核",
            icon: "success"
          });
          this.fetchOrders();
        } catch (error2) {
          uni.showToast({
            title: error2.message || "操作失败",
            icon: "none"
          });
          formatAppLog("error", "at pages/index/manage.vue:163", "审核通过失败:", error2);
        }
      },
      async rejectOrder(orderId) {
        uni.showModal({
          title: "输入拒绝原因",
          editable: true,
          placeholderText: "请输入拒绝原因",
          success: async (res) => {
            if (res.confirm && res.content) {
              const order = this.orders.find((o2) => o2.id === orderId);
              if (order) {
                order.status = "rejected";
                order.rejectReason = res.content;
                uni.showToast({
                  title: "已拒绝该订单",
                  icon: "success"
                });
                this.fetchOrders();
              } catch (error2) {
                uni.showToast({
                  title: error2.message || "操作失败",
                  icon: "none"
                });
                formatAppLog("error", "at pages/index/manage.vue:186", "拒绝订单失败:", error2);
              }
            }
          }
        });
      },
      getStatusClass(status) {
        return {
          "status-pending": status === "pending",
          "status-approved": status !== "pending" && status !== "rejected",
          "status-rejected": status === "rejected"
        };
      },
      getStatusText(status) {
        if (status === "pending")
          return "待审核";
        if (status === "rejected")
          return "已拒绝";
        return "已通过";
      },
      onStatusChange(e) {
        this.statusIndex = e.detail.value;
        this.fetchOrders();
      },
      onTypeChange(e) {
        this.typeIndex = e.detail.value;
        this.fetchOrders();
      },
      onYearChange(e) {
        this.yearIndex = e.detail.value;
        this.monthIndex = 0;
        this.fetchOrders();
      },
      onMonthChange(e) {
        this.monthIndex = e.detail.value;
        this.fetchOrders();
      }
    },
    mounted() {
      this.fetchOrders();
    },
    components: {
      NavigationBar
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("div", null, [
          vue.createCommentVNode(" 使用 NavigationBar 组件 "),
          vue.createVNode(_component_NavigationBar),
          vue.createCommentVNode(" 其他内容 ")
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "filter-bar" }, [
            vue.createElementVNode("view", { class: "filter-group" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[0] || (_cache[0] = (...args) => $options.onStatusChange && $options.onStatusChange(...args)),
                value: $data.statusIndex,
                range: $data.statusOptions,
                "range-key": "name"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    " 审核状态: " + vue.toDisplayString($data.statusOptions[$data.statusIndex].name) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"])
            ]),
            vue.createElementVNode("view", { class: "time-filters" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[1] || (_cache[1] = (...args) => $options.onYearChange && $options.onYearChange(...args)),
                value: $data.yearIndex,
                range: $data.years,
                class: "time-picker"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    vue.toDisplayString($data.years[$data.yearIndex] || "--") + "年 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"]),
              vue.createElementVNode("picker", {
                onChange: _cache[2] || (_cache[2] = (...args) => $options.onMonthChange && $options.onMonthChange(...args)),
                value: $data.monthIndex,
                range: $data.months,
                class: "time-picker"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    vue.toDisplayString($data.months[$data.monthIndex] || "--") + "月 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"])
            ]),
            vue.createElementVNode("view", { class: "filter-group" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[3] || (_cache[3] = (...args) => $options.onTypeChange && $options.onTypeChange(...args)),
                value: $data.typeIndex,
                range: $data.typeOptions,
                "range-key": "name"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    " 订单类型: " + vue.toDisplayString($data.typeOptions[$data.typeIndex].name) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"])
            ])
          ]),
          vue.createElementVNode("scroll-view", {
            class: "order-scroll",
            "scroll-y": "true",
            style: { "height": "calc(100vh - 200px)" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredOrders, (order) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "order-info",
                  key: order.id
                }, [
                  vue.createElementVNode("view", { class: "order-card" }, [
                    vue.createElementVNode("view", { class: "order-header" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(order.date),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(["status-badge", $options.getStatusClass(order.status)])
                        },
                        vue.toDisplayString($options.getStatusText(order.status)),
                        3
                        /* TEXT, CLASS */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "order-details" }, [
                      vue.createElementVNode("view", { class: "start-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_1$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "order-text" },
                          vue.toDisplayString(order.startPoint),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "departure-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_2$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "order-text" },
                          vue.toDisplayString(order.endPoint),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "separator" }),
                    vue.createElementVNode("view", { class: "order-summary" }, [
                      vue.createElementVNode("view", { class: "summary-content" }, [
                        vue.createElementVNode("image", {
                          src: order.userAvatar,
                          class: "user-avatar"
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "car-info" }, [
                          vue.createElementVNode("view", { class: "car-type-summary" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "car-type" },
                              vue.toDisplayString(order.carType || "无车辆信息"),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode("view", { class: "order-count-summary" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "order-count" },
                              "发布人: " + vue.toDisplayString(order.publisher),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "price-info" }, [
                          vue.createElementVNode(
                            "text",
                            {
                              class: "price-text",
                              style: { "color": "#003366", "font-weight": "bold" }
                            },
                            vue.toDisplayString(order.price) + "元",
                            1
                            /* TEXT */
                          )
                        ])
                      ])
                    ]),
                    order.status === "pending" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "audit-actions"
                    }, [
                      vue.createElementVNode("view", { class: "action-buttons" }, [
                        vue.createElementVNode("button", {
                          class: "reject-btn",
                          onClick: ($event) => $options.rejectOrder(order.id)
                        }, "拒绝", 8, ["onClick"]),
                        vue.createElementVNode("button", {
                          class: "approve-btn",
                          onClick: ($event) => $options.approveOrder(order.id)
                        }, "通过", 8, ["onClick"])
                      ])
                    ])) : vue.createCommentVNode("v-if", true),
                    order.status === "rejected" && order.rejectReason ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "audit-reason"
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        "拒绝原因: " + vue.toDisplayString(order.rejectReason),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexManage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-4652816d"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/manage.vue"]]);
  const _sfc_main$a = {
    components: {
      NavigationBar
    },
    data() {
      return {
        identity: "driver",
        // 'driver' 或 'passenger'
        startAddress: "",
        endAddress: "",
        startSuggestions: [],
        endSuggestions: [],
        startPos: null,
        endPos: null,
        centerLat: 31.238,
        centerLng: 121.49491,
        zoom: 14,
        zooms: [3, 20],
        markers: [],
        polyline: [],
        departureDate: "",
        departureTime: "",
        vehicleList: [],
        selectedVehicle: null,
        availableSeats: [],
        selectedSeats: null,
        price: "",
        currentDate: "",
        mapContext: null,
        passengerCount: 1,
        // Default to 1
        passengerCountOptions: Array.from({ length: 10 }, (_, i) => i + 1)
        // [1, 2, ..., 10]
      };
    },
    mounted() {
      this.initCurrentDate();
      this.initMap();
      this.fetchVehicleList();
    },
    methods: {
      initCurrentDate() {
        const now = /* @__PURE__ */ new Date();
        this.currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        this.departureDate = this.currentDate;
        this.departureTime = `${now.getHours()}:${now.getMinutes()}`;
      },
      initMap() {
        this.mapContext = uni.createMapContext("uni-map", this);
      },
      async fetchVehicleList() {
        try {
          this.vehicleList = [
            { id: 1, plateNumber: "京A12345", seats: 4 },
            { id: 2, plateNumber: "京B67890", seats: 5 }
          ];
        } catch (error2) {
          formatAppLog("error", "at pages/index/order_launch.vue:235", "获取车辆列表失败:", error2);
        }
      },
      handleStartInput() {
        if (this.startAddress.length > 1) {
          this.searchAddress(this.startAddress, "start");
        } else {
          this.startSuggestions = [];
        }
      },
      handleEndInput() {
        if (this.endAddress.length > 1) {
          this.searchAddress(this.endAddress, "end");
        } else {
          this.endSuggestions = [];
        }
      },
      async searchAddress(query, type) {
        try {
          const res = await uni.request({
            url: "https://restapi.amap.com/v3/assistant/inputtips",
            data: {
              keywords: query,
              key: "9979fdc383e13ee57c582bc869dbd690",
              // 替换为你的高德API key
              city: "上海",
              output: "JSON"
            }
          });
          if (res.data.status === "1" && res.data.tips) {
            const suggestions = res.data.tips.map((tip) => ({
              name: tip.name,
              location: tip.location ? tip.location.split(",") : null
            })).filter((item) => item.location);
            if (type === "start") {
              this.startSuggestions = suggestions;
            } else {
              this.endSuggestions = suggestions;
            }
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/order_launch.vue:277", "地址搜索失败:", error2);
        }
      },
      selectStartAddress(item) {
        this.startAddress = item.name;
        this.startPos = [parseFloat(item.location[0]), parseFloat(item.location[1])];
        this.startSuggestions = [];
        this.updateMap();
      },
      selectEndAddress(item) {
        this.endAddress = item.name;
        this.endPos = [parseFloat(item.location[0]), parseFloat(item.location[1])];
        this.endSuggestions = [];
        this.updateMap();
      },
      async updateMap() {
        if (this.startPos && this.endPos) {
          this.centerLng = this.startPos[0];
          this.centerLat = this.startPos[1];
          this.markers = [
            {
              id: 1,
              latitude: this.startPos[1],
              longitude: this.startPos[0],
              title: "起点",
              iconPath: "../../static/start.png",
              width: 20,
              height: 20
            },
            {
              id: 2,
              latitude: this.endPos[1],
              longitude: this.endPos[0],
              title: "终点",
              iconPath: "../../static/dest.png",
              width: 20,
              height: 20
            }
          ];
          await this.drawRoute();
        }
      },
      async drawRoute() {
        if (!this.startPos || !this.endPos)
          return;
        try {
          const res = await uni.request({
            url: "https://restapi.amap.com/v3/direction/driving",
            data: {
              origin: this.startPos.join(","),
              destination: this.endPos.join(","),
              key: "9979fdc383e13ee57c582bc869dbd690"
              // 替换为你的高德API key
            }
          });
          if (res.data.status === "1" && res.data.route && res.data.route.paths.length > 0) {
            const path = res.data.route.paths[0];
            let pointsArr = [];
            path.steps.forEach((step) => {
              step.polyline.split(";").forEach((point) => {
                const [lng, lat] = point.split(",");
                pointsArr.push({
                  latitude: parseFloat(lat),
                  longitude: parseFloat(lng)
                });
              });
            });
            this.polyline = [{
              points: pointsArr,
              color: "#1890FF",
              width: 6,
              dottedLine: false
            }];
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/order_launch.vue:356", "路线规划失败:", error2);
        }
      },
      handleDateChange(e) {
        this.departureDate = e.detail.value;
      },
      handleTimeChange(e) {
        this.departureTime = e.detail.value;
      },
      handleVehicleChange(e) {
        const index = e.detail.value;
        this.selectedVehicle = this.vehicleList[index];
        if (this.selectedVehicle) {
          this.availableSeats = Array.from(
            { length: this.selectedVehicle.seats - 1 },
            (_, i) => i + 1
          );
        } else {
          this.availableSeats = [];
        }
        this.selectedSeats = null;
      },
      handleSeatChange(e) {
        const index = e.detail.value;
        this.selectedSeats = this.availableSeats[index];
      },
      handlePassengerCountChange(e) {
        const index = e.detail.value;
        this.passengerCount = this.passengerCountOptions[index];
      },
      async handlePublish() {
        if (!this.startAddress || !this.endAddress) {
          uni.showToast({
            title: "请填写起点和终点",
            icon: "none"
          });
          return;
        }
        if (!this.departureDate || !this.departureTime) {
          uni.showToast({
            title: "请选择出发时间",
            icon: "none"
          });
          return;
        }
        if (this.identity === "driver" && !this.selectedVehicle) {
          uni.showToast({
            title: "请选择车辆",
            icon: "none"
          });
          return;
        }
        if (this.identity === "driver" && !this.selectedSeats) {
          uni.showToast({
            title: "请选择余座",
            icon: "none"
          });
          return;
        }
        if (this.identity === "passenger" && !this.passengerCount) {
          uni.showToast({
            title: "请选择同乘人数",
            icon: "none"
          });
          return;
        }
        if (!this.price) {
          uni.showToast({
            title: "请填写价格预期",
            icon: "none"
          });
          return;
        }
        ({
          identity: this.identity,
          startAddress: this.startAddress,
          endAddress: this.endAddress,
          startPos: this.startPos,
          endPos: this.endPos,
          departureTime: `${this.departureDate} ${this.departureTime}`,
          price: parseFloat(this.price),
          vehicleId: this.identity === "driver" ? this.selectedVehicle.id : null,
          availableSeats: this.identity === "driver" ? this.selectedSeats : null,
          passengerCount: this.identity === "passenger" ? parseInt(this.passengerCount) : null
          // 新增同乘人数
        });
        try {
          uni.showToast({
            title: "订单发布成功",
            icon: "success"
          });
          setTimeout(() => {
            uni.navigateBack();
          }, 1500);
        } catch (error2) {
          formatAppLog("error", "at pages/index/order_launch.vue:471", "订单发布失败:", error2);
          uni.showToast({
            title: "订单发布失败",
            icon: "none"
          });
        }
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_NavigationBar),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createCommentVNode(" 身份选择 "),
          vue.createElementVNode("view", { class: "identity-selector" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["identity-option", { "selected": $data.identity === "driver" }]),
                onClick: _cache[0] || (_cache[0] = ($event) => $data.identity = "driver")
              },
              " 车主 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["identity-option", { "selected": $data.identity === "passenger" }]),
                onClick: _cache[1] || (_cache[1] = ($event) => $data.identity = "passenger")
              },
              " 乘客 ",
              2
              /* CLASS */
            )
          ]),
          vue.createCommentVNode(" 地图容器 "),
          vue.createElementVNode("view", { class: "map-container" }, [
            vue.createElementVNode("map", {
              id: "uni-map",
              class: "map",
              latitude: $data.centerLat,
              longitude: $data.centerLng,
              markers: $data.markers,
              polyline: $data.polyline,
              "show-location": ""
            }, null, 8, ["latitude", "longitude", "markers", "polyline"])
          ]),
          vue.createCommentVNode(" 地址输入 "),
          vue.createElementVNode("view", { class: "address-container" }, [
            vue.createElementVNode("view", { class: "address-input" }, [
              vue.createElementVNode("view", { class: "input-group" }, [
                vue.createElementVNode("view", { class: "label-container" }, [
                  vue.createElementVNode("image", {
                    src: _imports_1$1,
                    class: "input-icon"
                  }),
                  vue.createElementVNode("text", { class: "input-label" }, "起点")
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.startAddress = $event),
                    onInput: _cache[3] || (_cache[3] = (...args) => $options.handleStartInput && $options.handleStartInput(...args)),
                    placeholder: "请输入起点",
                    class: "address-input-field"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [vue.vModelText, $data.startAddress]
                ]),
                $data.startSuggestions.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "suggestions"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.startSuggestions, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: index,
                        onClick: ($event) => $options.selectStartAddress(item),
                        class: "suggestion-item"
                      }, vue.toDisplayString(item.name), 9, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "input-group" }, [
                vue.createElementVNode("view", { class: "label-container" }, [
                  vue.createElementVNode("image", {
                    src: _imports_2$1,
                    class: "input-icon"
                  }),
                  vue.createElementVNode("text", { class: "input-label" }, "终点")
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.endAddress = $event),
                    onInput: _cache[5] || (_cache[5] = (...args) => $options.handleEndInput && $options.handleEndInput(...args)),
                    placeholder: "请输入终点",
                    class: "address-input-field"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [vue.vModelText, $data.endAddress]
                ]),
                $data.endSuggestions.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "suggestions"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.endSuggestions, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: index,
                        onClick: ($event) => $options.selectEndAddress(item),
                        class: "suggestion-item"
                      }, vue.toDisplayString(item.name), 9, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "order-info" }, [
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("text", { class: "info-label" }, "出发时间"),
              vue.createElementVNode("picker", {
                mode: "date",
                value: $data.departureDate,
                start: $data.currentDate,
                onChange: _cache[6] || (_cache[6] = (...args) => $options.handleDateChange && $options.handleDateChange(...args)),
                class: "info-picker"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "picker-text" },
                  vue.toDisplayString($data.departureDate),
                  1
                  /* TEXT */
                )
              ], 40, ["value", "start"]),
              vue.createElementVNode("picker", {
                mode: "time",
                value: $data.departureTime,
                onChange: _cache[7] || (_cache[7] = (...args) => $options.handleTimeChange && $options.handleTimeChange(...args)),
                class: "info-picker"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "picker-text" },
                  vue.toDisplayString($data.departureTime),
                  1
                  /* TEXT */
                )
              ], 40, ["value"])
            ]),
            $data.identity === "driver" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "info-item"
            }, [
              vue.createElementVNode("text", { class: "info-label" }, "车辆选择"),
              vue.createElementVNode("picker", {
                mode: "selector",
                range: $data.vehicleList,
                "range-key": "plateNumber",
                onChange: _cache[8] || (_cache[8] = (...args) => $options.handleVehicleChange && $options.handleVehicleChange(...args)),
                class: "info-picker"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "picker-text" },
                  vue.toDisplayString($data.selectedVehicle ? $data.selectedVehicle.plateNumber : "请选择车辆"),
                  1
                  /* TEXT */
                )
              ], 40, ["range"])
            ])) : vue.createCommentVNode("v-if", true),
            $data.identity === "driver" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "info-item"
            }, [
              vue.createElementVNode("text", { class: "info-label" }, "余座"),
              vue.createElementVNode("picker", {
                mode: "selector",
                range: $data.availableSeats,
                onChange: _cache[9] || (_cache[9] = (...args) => $options.handleSeatChange && $options.handleSeatChange(...args)),
                class: "info-picker"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "picker-text" },
                  vue.toDisplayString($data.selectedSeats ? $data.selectedSeats : "请选择余座"),
                  1
                  /* TEXT */
                )
              ], 40, ["range"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 修改后的乘客同乘人数选择 "),
            $data.identity === "passenger" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "info-item"
            }, [
              vue.createElementVNode("text", { class: "info-label" }, "同乘人数"),
              vue.createElementVNode("picker", {
                mode: "selector",
                range: $data.passengerCountOptions,
                onChange: _cache[10] || (_cache[10] = (...args) => $options.handlePassengerCountChange && $options.handlePassengerCountChange(...args)),
                class: "info-picker"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "picker-text" },
                  vue.toDisplayString($data.passengerCount),
                  1
                  /* TEXT */
                )
              ], 40, ["range"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("text", { class: "info-label" }, "价格预期"),
              vue.createElementVNode("view", { class: "price-input-container" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.price = $event),
                    type: "number",
                    placeholder: "请输入价格",
                    class: "price-input"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $data.price]
                ]),
                vue.createElementVNode("text", { class: "price-unit" }, "元")
              ])
            ])
          ]),
          vue.createCommentVNode(" 发布按钮 "),
          vue.createElementVNode("button", {
            class: "publish-button",
            onClick: _cache[12] || (_cache[12] = (...args) => $options.handlePublish && $options.handlePublish(...args))
          }, "发布")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexOrderLaunch = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/order_launch.vue"]]);
  const _imports_0$2 = "/static/info-manage.png";
  const _imports_1 = "/static/car-manage.png";
  const _imports_2 = "/static/calendar.png";
  const _imports_3 = "/static/see-all.png";
  const _sfc_main$7 = {
    components: {
      NavigationBar
    },
    name: "App",
    data() {
      return {
        user: {
          avatar: "../../static/user.jpeg",
          name: "加载中...",
          age: 0,
          gender: ""
        },
        isEditing: false,
        trips: []
      };
    },
    computed: {
      recentTrips() {
        const threeMonthsAgo = /* @__PURE__ */ new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
        return this.trips.sort((a2, b2) => new Date(b2.date) - new Date(a2.date));
      }
    },
    methods: {
      info_manage() {
        uni.navigateTo({
          url: "/pages/index/info_manage"
        });
      },
      car_manage() {
        uni.navigateTo({
          url: "/pages/index/car_manage"
        });
      },
      calendar() {
        uni.navigateTo({
          url: "/pages/index/calendar"
        });
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
      },
      viewAllTrips() {
        uni.navigateTo({
          url: "/pages/index/record"
        });
      },
      async fetchUserData() {
        this.loading = true;
        try {
          const cacheUser = uni.getStorageSync("user_info");
          if (cacheUser) {
            this.user.name = cacheUser.username;
            this.user.avatar = cacheUser.avatar;
            this.user.age = cacheUser.age;
            this.user.gender = cacheUser.gender;
          }
          const cacheUserID = uni.getStorageSync("user_id");
          const res = await fetchUserBaseInfo(cacheUserID);
          const newUserData = {
            user_id: res.user_id,
            name: res.username,
            avatar: res.avatar,
            age: res.age,
            gender: res.gender
          };
          if (JSON.stringify(this.user) !== JSON.stringify(newUserData)) {
            this.user = newUserData;
            uni.setStorageSync("user_info", newUserData);
            formatAppLog("log", "at pages/index/person.vue:171", this.user);
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/person.vue:174", "获取用户数据失败:", error2);
        }
      },
      viewDetails(tripId) {
        this.$router.push({ name: "Detail", params: { id: tripId } });
      },
      toggleEdit() {
        this.isEditing = !this.isEditing;
      },
      saveChanges() {
        formatAppLog("log", "at pages/index/person.vue:184", "保存修改:", this.user);
        this.isEditing = false;
      },
      openFileInput() {
        this.$refs.fileInput.click();
      },
      uploadAvatar(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.user.avatar = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      async fetchUserTrips() {
        try {
          const cacheUserID = uni.getStorageSync("user_id");
          if (!cacheUserID) {
            formatAppLog("error", "at pages/index/person.vue:204", "用户ID不存在");
            return;
          }
          const res = await fetchUserTrips(cacheUserID);
          if (res.code === 200) {
            this.trips = res.data.map((trip) => ({
              id: trip.id,
              date: trip.date,
              startPoint: trip.startPoint,
              endPoint: trip.endPoint,
              price: trip.price,
              carType: trip.carType,
              userAvatar: trip.userAvatar,
              orderCount: trip.orderCount,
              status: trip.status
            }));
          } else {
            formatAppLog("error", "at pages/index/person.vue:222", "获取行程数据失败:", res.error);
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/person.vue:225", "获取行程数据异常:", error2);
        }
      }
    },
    mounted() {
      this.fetchUserData();
      this.fetchUserTrips();
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 使用 NavigationBar 组件 "),
        vue.createVNode(_component_NavigationBar),
        vue.createCommentVNode(" 其他内容 "),
        vue.createElementVNode("view", { class: "flex-col self-start group" }, [
          vue.createElementVNode("view", { class: "flex-col section" }, [
            vue.createElementVNode("view", { class: "flex-row justify-between items-center group_2" }, [
              vue.createElementVNode("image", {
                class: "user_avatar",
                src: $data.user.avatar
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "flex-col group_3" }, [
                vue.createElementVNode(
                  "text",
                  { class: "self-start user-name" },
                  vue.toDisplayString($data.user.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "flex-row items-center self-stretch user-info" }, [
                  vue.createElementVNode("image", {
                    class: "gender-icon",
                    src: $data.user.gender === "男" || $data.user.gender === "male" ? "../../static/male.png" : "../../static/female.png"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { class: "user-age" },
                    vue.toDisplayString($data.user.age) + "岁",
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            vue.createCommentVNode(" 修改 menu-items 部分的代码 "),
            vue.createElementVNode("view", { class: "flex-row menu-items" }, [
              vue.createElementVNode("view", {
                class: "flex-col items-center equal-division-item",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.info_manage && $options.info_manage(...args))
              }, [
                vue.createElementVNode("image", {
                  class: "menu-icon",
                  src: _imports_0$1
                }),
                vue.createElementVNode("text", { class: "menu-text" }, "信息编辑")
              ]),
              vue.createElementVNode("view", {
                class: "flex-col items-center equal-division-item",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.car_manage && $options.car_manage(...args))
              }, [
                vue.createElementVNode("image", {
                  class: "menu-icon",
                  src: _imports_1
                }),
                vue.createElementVNode("text", { class: "menu-text" }, "车牌管理")
              ]),
              vue.createElementVNode("view", {
                class: "flex-col items-center equal-division-item",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.calendar && $options.calendar(...args))
              }, [
                vue.createElementVNode("image", {
                  class: "menu-icon",
                  src: _imports_2
                }),
                vue.createElementVNode("text", { class: "menu-text" }, "出行日历")
              ])
            ])
          ]),
          vue.createElementVNode("div", { class: "trip-info-card" }, [
            vue.createElementVNode("div", { class: "trip-scroll" }, [
              vue.createCommentVNode(" 添加悬浮按钮 "),
              vue.createElementVNode("button", {
                class: "floating-button",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.viewAllTrips && $options.viewAllTrips(...args))
              }, [
                vue.createElementVNode("image", {
                  src: _imports_3,
                  class: "floating-icon"
                }),
                vue.createElementVNode("text", { class: "floating-text" }, "所有")
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($options.recentTrips, (trip) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: "trip-card",
                    key: trip.id
                  }, [
                    vue.createElementVNode("div", { class: "trip-header" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "trip-date" },
                        vue.toDisplayString($options.formatDate(trip.date)),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("button", {
                        class: "view-details-button",
                        onClick: ($event) => $options.viewDetails(trip.id)
                      }, "查看详情", 8, ["onClick"])
                    ]),
                    vue.createElementVNode("div", { class: "trip-details" }, [
                      vue.createElementVNode("div", { class: "start-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_1$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "trip-text" },
                          vue.toDisplayString(trip.startPoint),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "departure-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_2$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "trip-text" },
                          vue.toDisplayString(trip.endPoint),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("div", { class: "separator" }),
                    vue.createElementVNode("div", { class: "trip-summary" }, [
                      vue.createElementVNode("div", { class: "summary-content" }, [
                        vue.createElementVNode("image", {
                          src: trip.userAvatar,
                          class: "user-avatar"
                        }, null, 8, ["src"]),
                        vue.createElementVNode("div", { class: "car-info" }, [
                          vue.createElementVNode("div", { class: "car-type-summary" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "car-type" },
                              vue.toDisplayString(trip.carType),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode("div", { class: "trip-count-summary" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "trip-count" },
                              "接单" + vue.toDisplayString(trip.orderCount) + "次",
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode("div", { class: "price-info" }, [
                          vue.createElementVNode(
                            "text",
                            {
                              class: "price-text",
                              style: { "color": "#003366", "font-weight": "bold" }
                            },
                            vue.toDisplayString(trip.price) + "元",
                            1
                            /* TEXT */
                          )
                        ])
                      ])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexPerson = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/person.vue"]]);
  var calendar = {
    /**
        * 农历1900-2100的润大小信息表
        * @Array Of Property
        * @return Hex
        */
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      // 1900-1909
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      // 1910-1919
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      // 1920-1929
      25958,
      54432,
      59984,
      28309,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      // 1930-1939
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      // 1940-1949
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      // 1950-1959
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      // 1960-1969
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      // 1970-1979
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      // 1980-1989
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      23232,
      43872,
      38613,
      37600,
      // 1990-1999
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      // 2000-2009
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      // 2010-2019
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      // 2020-2029
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      // 2030-2039
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      // 2040-2049
      /** Add By JJonline@JJonline.Cn**/
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      // 2050-2059
      41696,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      // 2060-2069
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      // 2070-2079
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      // 2080-2089
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      // 2090-2099
      54560
    ],
    // 2100
    /**
        * 公历每个月份的天数普通表
        * @Array Of Property
        * @return Number
        */
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    /**
        * 天干地支之天干速查表
        * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
        * @return Cn string
        */
    Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    /**
        * 天干地支之地支速查表
        * @Array Of Property
        * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
        * @return Cn string
        */
    Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    /**
        * 天干地支之地支速查表<=>生肖
        * @Array Of Property
        * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
        * @return Cn string
        */
    Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    /**
        * 24节气速查表
        * @Array Of Property
        * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
        * @return Cn string
        */
    solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
    /**
        * 1900-2100各年的24节气日期速查表
        * @Array Of Property
        * @return 0x string For splice
        */
    sTermInfo: [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722"
    ],
    /**
        * 数字转中文速查表
        * @Array Of Property
        * @trans ['日','一','二','三','四','五','六','七','八','九','十']
        * @return Cn string
        */
    nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    /**
        * 日期转农历称呼速查表
        * @Array Of Property
        * @trans ['初','十','廿','卅']
        * @return Cn string
        */
    nStr2: ["初", "十", "廿", "卅"],
    /**
        * 月份转农历称呼速查表
        * @Array Of Property
        * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
        * @return Cn string
        */
    nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
    /**
        * 返回农历y年一整年的总天数
        * @param lunar Year
        * @return Number
        * @eg:var count = calendar.lYearDays(1987) ;//count=387
        */
    lYearDays: function(y) {
      var i;
      var sum = 348;
      for (i = 32768; i > 8; i >>= 1) {
        sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
      }
      return sum + this.leapDays(y);
    },
    /**
        * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
        * @param lunar Year
        * @return Number (0-12)
        * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
        */
    leapMonth: function(y) {
      return this.lunarInfo[y - 1900] & 15;
    },
    /**
        * 返回农历y年闰月的天数 若该年没有闰月则返回0
        * @param lunar Year
        * @return Number (0、29、30)
        * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
        */
    leapDays: function(y) {
      if (this.leapMonth(y)) {
        return this.lunarInfo[y - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    /**
        * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
        * @param lunar Year
        * @return Number (-1、29、30)
        * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
        */
    monthDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      return this.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
    },
    /**
        * 返回公历(!)y年m月的天数
        * @param solar Year
        * @return Number (-1、28、29、30、31)
        * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
        */
    solarDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var ms = m - 1;
      if (ms == 1) {
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
      } else {
        return this.solarMonth[ms];
      }
    },
    /**
       * 农历年份转换为干支纪年
       * @param  lYear 农历年的年份数
       * @return Cn string
       */
    toGanZhiYear: function(lYear) {
      var ganKey = (lYear - 3) % 10;
      var zhiKey = (lYear - 3) % 12;
      if (ganKey == 0)
        ganKey = 10;
      if (zhiKey == 0)
        zhiKey = 12;
      return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    /**
       * 公历月、日判断所属星座
       * @param  cMonth [description]
       * @param  cDay [description]
       * @return Cn string
       */
    toAstro: function(cMonth, cDay) {
      var s = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
      var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
    },
    /**
        * 传入offset偏移量返回干支
        * @param offset 相对甲子的偏移量
        * @return Cn string
        */
    toGanZhi: function(offset) {
      return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    /**
        * 传入公历(!)y年获得该年第n个节气的公历日期
        * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
        * @return day Number
        * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
        */
    getTerm: function(y, n) {
      if (y < 1900 || y > 2100) {
        return -1;
      }
      if (n < 1 || n > 24) {
        return -1;
      }
      var _table = this.sTermInfo[y - 1900];
      var _info = [
        parseInt("0x" + _table.substr(0, 5)).toString(),
        parseInt("0x" + _table.substr(5, 5)).toString(),
        parseInt("0x" + _table.substr(10, 5)).toString(),
        parseInt("0x" + _table.substr(15, 5)).toString(),
        parseInt("0x" + _table.substr(20, 5)).toString(),
        parseInt("0x" + _table.substr(25, 5)).toString()
      ];
      var _calday = [
        _info[0].substr(0, 1),
        _info[0].substr(1, 2),
        _info[0].substr(3, 1),
        _info[0].substr(4, 2),
        _info[1].substr(0, 1),
        _info[1].substr(1, 2),
        _info[1].substr(3, 1),
        _info[1].substr(4, 2),
        _info[2].substr(0, 1),
        _info[2].substr(1, 2),
        _info[2].substr(3, 1),
        _info[2].substr(4, 2),
        _info[3].substr(0, 1),
        _info[3].substr(1, 2),
        _info[3].substr(3, 1),
        _info[3].substr(4, 2),
        _info[4].substr(0, 1),
        _info[4].substr(1, 2),
        _info[4].substr(3, 1),
        _info[4].substr(4, 2),
        _info[5].substr(0, 1),
        _info[5].substr(1, 2),
        _info[5].substr(3, 1),
        _info[5].substr(4, 2)
      ];
      return parseInt(_calday[n - 1]);
    },
    /**
        * 传入农历数字月份返回汉语通俗表示法
        * @param lunar month
        * @return Cn string
        * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
        */
    toChinaMonth: function(m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var s = this.nStr3[m - 1];
      s += "月";
      return s;
    },
    /**
        * 传入农历日期数字返回汉字表示法
        * @param lunar day
        * @return Cn string
        * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
        */
    toChinaDay: function(d) {
      var s;
      switch (d) {
        case 10:
          s = "初十";
          break;
        case 20:
          s = "二十";
          break;
        case 30:
          s = "三十";
          break;
        default:
          s = this.nStr2[Math.floor(d / 10)];
          s += this.nStr1[d % 10];
      }
      return s;
    },
    /**
        * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
        * @param y year
        * @return Cn string
        * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
        */
    getAnimal: function(y) {
      return this.Animals[(y - 4) % 12];
    },
    /**
        * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
        * @param y  solar year
        * @param m  solar month
        * @param d  solar day
        * @return JSON object
        * @eg:__f__('log','at uni_modules/uni-calendar/components/uni-calendar/calendar.js:379',calendar.solar2lunar(1987,11,01));
        */
    solar2lunar: function(y, m, d) {
      if (y < 1900 || y > 2100) {
        return -1;
      }
      if (y == 1900 && m == 1 && d < 31) {
        return -1;
      }
      if (!y) {
        var objDate = /* @__PURE__ */ new Date();
      } else {
        var objDate = new Date(y, parseInt(m) - 1, d);
      }
      var i;
      var leap = 0;
      var temp = 0;
      var y = objDate.getFullYear();
      var m = objDate.getMonth() + 1;
      var d = objDate.getDate();
      var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (i = 1900; i < 2101 && offset > 0; i++) {
        temp = this.lYearDays(i);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i--;
      }
      var isTodayObj = /* @__PURE__ */ new Date();
      var isToday = false;
      if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
        isToday = true;
      }
      var nWeek = objDate.getDay();
      var cWeek = this.nStr1[nWeek];
      if (nWeek == 0) {
        nWeek = 7;
      }
      var year = i;
      var leap = this.leapMonth(i);
      var isLeap = false;
      for (i = 1; i < 13 && offset > 0; i++) {
        if (leap > 0 && i == leap + 1 && isLeap == false) {
          --i;
          isLeap = true;
          temp = this.leapDays(year);
        } else {
          temp = this.monthDays(year, i);
        }
        if (isLeap == true && i == leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      if (offset == 0 && leap > 0 && i == leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i;
      }
      var month = i;
      var day = offset + 1;
      var sm = m - 1;
      var gzY = this.toGanZhiYear(year);
      var firstNode = this.getTerm(y, m * 2 - 1);
      var secondNode = this.getTerm(y, m * 2);
      var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
      if (d >= firstNode) {
        gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
      }
      var isTerm = false;
      var Term = null;
      if (firstNode == d) {
        isTerm = true;
        Term = this.solarTerm[m * 2 - 2];
      }
      if (secondNode == d) {
        isTerm = true;
        Term = this.solarTerm[m * 2 - 1];
      }
      var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
      var gzD = this.toGanZhi(dayCyclical + d - 1);
      var astro = this.toAstro(m, d);
      return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "星期" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
    },
    /**
        * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
        * @param y  lunar year
        * @param m  lunar month
        * @param d  lunar day
        * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
        * @return JSON object
        * @eg:__f__('log','at uni_modules/uni-calendar/components/uni-calendar/calendar.js:498',calendar.lunar2solar(1987,9,10));
        */
    lunar2solar: function(y, m, d, isLeapMonth) {
      var isLeapMonth = !!isLeapMonth;
      var leapMonth = this.leapMonth(y);
      this.leapDays(y);
      if (isLeapMonth && leapMonth != m) {
        return -1;
      }
      if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
        return -1;
      }
      var day = this.monthDays(y, m);
      var _day = day;
      if (isLeapMonth) {
        _day = this.leapDays(y, m);
      }
      if (y < 1900 || y > 2100 || d > _day) {
        return -1;
      }
      var offset = 0;
      for (var i = 1900; i < y; i++) {
        offset += this.lYearDays(i);
      }
      var leap = 0;
      var isAdd = false;
      for (var i = 1; i < m; i++) {
        leap = this.leapMonth(y);
        if (!isAdd) {
          if (leap <= i && leap > 0) {
            offset += this.leapDays(y);
            isAdd = true;
          }
        }
        offset += this.monthDays(y, i);
      }
      if (isLeapMonth) {
        offset += day;
      }
      var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
      var calObj = new Date((offset + d - 31) * 864e5 + stmap);
      var cY = calObj.getUTCFullYear();
      var cM = calObj.getUTCMonth() + 1;
      var cD = calObj.getUTCDate();
      return this.solar2lunar(cY, cM, cD);
    }
  };
  class Calendar {
    constructor({
      date,
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDate(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    /**
     * 重置开始日期
     */
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    /**
     * 重置结束日期
     */
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    /**
     * 获取任意时间
     */
    getDate(date, AddDayCount = 0, str = "day") {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      if (typeof date !== "object") {
        date = date.replace(/-/g, "/");
      }
      const dd = new Date(date);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31 && AddDayCount > 0) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            const preMonth = dd.getMonth();
            dd.setMonth(preMonth + AddDayCount);
            const nextMonth = dd.getMonth();
            if (AddDayCount < 0 && preMonth !== 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth + (nextMonth - preMonth + AddDayCount));
            }
            if (AddDayCount > 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth - (nextMonth - preMonth - AddDayCount));
            }
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y = dd.getFullYear();
      const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y + "-" + m + "-" + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay()
      };
    }
    /**
     * 获取上月剩余天数
     */
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i = firstDay; i > 0; i--) {
        const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取本月天数
     */
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i = 1; i <= dateData; i++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
        let isDay = fullDate === nowDate;
        let info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: this.range ? checked : false,
          beforeMultiple: this.dateEqual(this.multipleStatus.before, nowDate),
          afterMultiple: this.dateEqual(this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: this.getlunar(full.year, full.month, i),
          disable: !(disableBefore && disableAfter),
          isDay
        };
        if (info) {
          data.extraInfo = info;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    /**
     * 获取下月天数
     */
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date) {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
      return dateInfo;
    }
    /**
     * 比较时间大小
     */
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = /* @__PURE__ */ new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     * 计算阴历日期显示
     */
    getlunar(year, month, date) {
      return calendar.solar2lunar(year, month, date);
    }
    /**
     * 设置打点
     */
    setSelectInfo(data, value) {
      this.selected = value;
      this._getWeek(data);
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (before && after) {
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    _getWeek(dateData) {
      const {
        year,
        month
      } = this.getDate(dateData);
      let firstDay = new Date(year, month - 1, 1).getDay();
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        // 本月天数
        nextMonthDays: [],
        // 下个月开始几天
        weeks: []
      };
      let canlender = [];
      const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      let weeks = {};
      for (let i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }
    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages && Object.keys(messages).length > 0) {
      locales = Object.keys(messages);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages,
        locale
      ];
      locale = options[0];
      messages = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-calender.ok": "ok",
    "uni-calender.cancel": "cancel",
    "uni-calender.today": "today",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN"
  };
  const zhHans = {
    "uni-calender.ok": "确定",
    "uni-calender.cancel": "取消",
    "uni-calender.today": "今日",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六"
  };
  const zhHant = {
    "uni-calender.ok": "確定",
    "uni-calender.cancel": "取消",
    "uni-calender.today": "今日",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六"
  };
  const i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$2 } = initVueI18n(i18nMessages);
  const _sfc_main$8 = {
    emits: ["change"],
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      todayText() {
        return t$1("uni-calender.today");
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
          "uni-calendar-item--disable": $props.weeks.disable,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks))
      },
      [
        vue.createElementVNode("view", { class: "uni-calendar-item__weeks-box-item" }, [
          $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "uni-calendar-item__weeks-box-circle"
          })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["uni-calendar-item__weeks-box-text", {
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
                "uni-calendar-item--disable": $props.weeks.disable
              }])
            },
            vue.toDisplayString($props.weeks.date),
            3
            /* TEXT, CLASS */
          ),
          !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple
              }])
            },
            vue.toDisplayString($options.todayText),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true),
          $props.lunar && !$props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 2,
              class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
                "uni-calendar-item--disable": $props.weeks.disable
              }])
            },
            vue.toDisplayString($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "初一" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true),
          $props.weeks.extraInfo && $props.weeks.extraInfo.info ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 3,
              class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
                "uni-calendar-item--extra": $props.weeks.extraInfo.info,
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
                "uni-calendar-item--disable": $props.weeks.disable
              }])
            },
            vue.toDisplayString($props.weeks.extraInfo.info),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      2
      /* CLASS */
    );
  }
  const CalendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-65626c58"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/uni_modules/uni-calendar/components/uni-calendar/uni-calendar-item.vue"]]);
  const { t: t$1 } = initVueI18n(i18nMessages);
  const _sfc_main$7 = {
    components: {
      CalendarItem
    },
    emits: ["close", "confirm", "change", "monthSwitch"],
    props: {
      date: {
        type: String,
        default: ""
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false
      };
    },
    computed: {
      /**
       * for i18n
       */
      okText() {
        return t("uni-calender.ok");
      },
      cancelText() {
        return t("uni-calender.cancel");
      },
      todayText() {
        return t("uni-calender.today");
      },
      monText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      }
    },
    watch: {
      date(newVal) {
        this.init(newVal);
      },
      startDate(val) {
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      }
    },
    created() {
      this.cale = new Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      // 取消穿透
      clean() {
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        this.setDate(value);
        const { year, month } = this.cale.getDate(value);
        this.$emit("monthSwitch", {
          year,
          month
        });
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date);
      },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        let {
          year,
          month,
          date,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.cale.setMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        this.change();
      },
      /**
       * 回到今天
       */
      backToday() {
        const nowYearMonth = `${this.nowDate.year}-${this.nowDate.month}`;
        const date = this.cale.getDate(/* @__PURE__ */ new Date());
        const todayYearMonth = `${date.year}-${date.month}`;
        this.init(date.fullDate);
        if (nowYearMonth !== todayYearMonth) {
          this.monthSwitch();
        }
        this.change();
      },
      /**
       * 上个月
       */
      pre() {
        const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
        this.setDate(preDate);
        this.monthSwitch();
      },
      /**
       * 下个月
       */
      next() {
        const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
        this.setDate(nextDate);
        this.monthSwitch();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-calendar" }, [
      !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow }])
        },
        [
          !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__header uni-calendar--fixed-top"
          }, [
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__header-text uni-calendar--fixed-width" },
                vue.toDisplayString($options.cancelText),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__header-text uni-calendar--fixed-width" },
                vue.toDisplayString($options.okText),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-calendar__header" }, [
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
            ]),
            vue.createElementVNode("picker", {
              mode: "date",
              value: $props.date,
              fields: "month",
              onChange: _cache[4] || (_cache[4] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__header-text" },
                vue.toDisplayString(($data.nowDate.year || "") + " / " + ($data.nowDate.month || "")),
                1
                /* TEXT */
              )
            ], 40, ["value"]),
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
            ]),
            vue.createElementVNode(
              "text",
              {
                class: "uni-calendar__backtoday",
                onClick: _cache[6] || (_cache[6] = (...args) => $options.backToday && $options.backToday(...args))
              },
              vue.toDisplayString($options.todayText),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "uni-calendar__box" }, [
            $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-calendar__box-bg"
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__box-bg-text" },
                vue.toDisplayString($data.nowDate.month),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "uni-calendar__weeks" }, [
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.SUNText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.monText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.TUEText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.WEDText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.THUText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.FRIText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.SATText),
                  1
                  /* TEXT */
                )
              ])
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.weeks, (item, weekIndex) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-calendar__weeks",
                  key: weekIndex
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(item, (weeks, weeksIndex) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "uni-calendar__weeks-item",
                        key: weeksIndex
                      }, [
                        vue.createVNode(_component_calendar_item, {
                          class: "uni-calendar-item--hook",
                          weeks,
                          calendar: $data.calendar,
                          selected: $props.selected,
                          lunar: $props.lunar,
                          onChange: $options.choiceDate
                        }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange"])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-b6ab2cfb"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue"]]);
  const _sfc_main$6 = {
    components: {
      NavigationBar
    },
    data() {
      return {
        selectedDate: this.getTodayDate(),
        trips: [],
        isLoading: false
      };
    },
    computed: {
      selectedTrips() {
        if (!this.selectedDate)
          return [];
        const selectedDateStr = this.selectedDate.split(" ")[0];
        return this.trips.filter((trip) => {
          const tripDateStr = new Date(trip.start_time).toISOString().split("T")[0];
          return tripDateStr === selectedDateStr;
        });
      }
    },
    methods: {
      async fetchTripsForMonth(year, month) {
        try {
          const cacheUserID = uni.getStorageSync("user_id");
          this.isLoading = true;
          this.trips = await fetchCalendarTrips(year, month, cacheUserID);
        } catch (error2) {
          formatAppLog("error", "at pages/index/calendar.vue:99", "Error fetching trips:", error2);
          uni.showToast({
            title: "获取行程失败",
            icon: "none"
          });
        } finally {
          this.isLoading = false;
        }
      },
      getTodayDate() {
        const today = /* @__PURE__ */ new Date();
        return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
      },
      onDateChange(e2) {
        this.selectedDate = e2.fulldate;
      },
      formatDisplayDate(dateStr) {
        const date = new Date(dateStr);
        const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
        return date.toLocaleDateString("zh-CN", options);
      },
      formatTime(dateString) {
        const date = new Date(dateString);
        return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
      },
      viewDetails(tripId) {
        uni.navigateTo({
          url: `/pages/index/trip_info?id=${tripId}`
        });
      }
    },
    mounted() {
      const today = /* @__PURE__ */ new Date();
      this.fetchTripsForMonth(today.getFullYear(), today.getMonth() + 1);
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    const _component_uni_calendar = resolveEasycom(vue.resolveDynamicComponent("uni-calendar"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "carpool-calendar-container" }, [
      vue.createVNode(_component_NavigationBar),
      vue.createCommentVNode(" 日历区域 "),
      vue.createElementVNode("view", { class: "calendar-section" }, [
        vue.createVNode(_component_uni_calendar, {
          ref: "calendar",
          insert: true,
          date: $data.selectedDate,
          onChange: $options.onDateChange
        }, null, 8, ["date", "onChange"])
      ]),
      vue.createCommentVNode(" 拼车信息区域 "),
      vue.createElementVNode("view", { class: "trip-info-section" }, [
        vue.createElementVNode(
          "h2",
          { class: "selected-date" },
          vue.toDisplayString($data.selectedDate ? $options.formatDisplayDate($data.selectedDate) : "请选择日期查看拼车计划"),
          1
          /* TEXT */
        ),
        $options.selectedTrips.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "trip-info-card"
        }, [
          vue.createElementVNode("scroll-view", {
            class: "trip-scroll",
            "scroll-y": ""
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.selectedTrips, (trip) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "trip-card",
                  key: trip.id
                }, [
                  vue.createElementVNode("view", { class: "trip-header" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "trip-time" },
                      vue.toDisplayString($options.formatTime(trip.date)),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("button", {
                      class: "view-details-button",
                      onClick: ($event) => $options.viewDetails(trip.id)
                    }, "查看详情", 8, ["onClick"])
                  ]),
                  vue.createElementVNode("view", { class: "trip-details" }, [
                    vue.createElementVNode("view", { class: "start-point" }, [
                      vue.createElementVNode("image", {
                        src: _imports_1$1,
                        class: "trip-icon"
                      }),
                      vue.createElementVNode(
                        "text",
                        { class: "trip-text" },
                        vue.toDisplayString(trip.startPoint),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "departure-point" }, [
                      vue.createElementVNode("image", {
                        src: _imports_2$1,
                        class: "trip-icon"
                      }),
                      vue.createElementVNode(
                        "text",
                        { class: "trip-text" },
                        vue.toDisplayString(trip.endPoint),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "separator" }),
                  vue.createElementVNode("view", { class: "trip-summary" }, [
                    vue.createElementVNode("view", { class: "summary-content" }, [
                      vue.createElementVNode("image", {
                        src: trip.userAvatar,
                        class: "user-avatar"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "car-info" }, [
                        vue.createElementVNode("view", { class: "car-type-summary" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "car-type" },
                            vue.toDisplayString(trip.carType),
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode("view", { class: "trip-count-summary" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "trip-count" },
                            "接单" + vue.toDisplayString(trip.orderCount) + "次",
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "price-info" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "price-text" },
                          vue.toDisplayString(trip.price) + "元",
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "no-trips-message"
        }, [
          $data.selectedDate ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "该日期暂无拼车计划")) : (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "请从日历中选择一个日期"))
        ]))
      ])
    ]);
  }
  const PagesIndexCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-da8fb852"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/calendar.vue"]]);
  const _sfc_main$5 = {
    components: {
      NavigationBar
    },
    data() {
      return {
        user: {
          user_id: null,
          avatar: "",
          // 头像
          username: "",
          // 用户名
          gender: "",
          // 新增性别字段
          contact: "",
          password: "",
          // 新增密码字段
          confirmPassword: ""
          // 新增确认密码字段
        },
        originalUser: {},
        // 保存原始数据用于比较
        defaultAvatar: "../../static/user.jpeg",
        // 直接使用路径
        avatarError: "",
        genderList: [
          // 性别选项
          { name: "男", value: "男" },
          { name: "女", value: "女" }
        ]
      };
    },
    created() {
      this.fetchUserModifiableData();
    },
    methods: {
      async fetchUserModifiableData() {
        this.loading = true;
        try {
          const cacheUserID = uni.getStorageSync("user_id");
          const res = await fetchModifiableData(cacheUserID);
          const avatar = await fetchUserAvatar(cacheUserID);
          formatAppLog("log", "at pages/index/info_manage.vue:133", res);
          const userData = {
            user_id: cacheUserID,
            avatar: avatar || this.defaultAvatar,
            gender: res.gender,
            contact: res.telephone,
            username: res.username
          };
          this.user = { ...userData };
          this.originalUser = { ...userData };
        } catch (error2) {
          formatAppLog("error", "at pages/index/info_manage.vue:145", "获取用户数据失败:", error2);
          uni.showToast({ title: "获取信息失败", icon: "none" });
        }
      },
      // 处理性别选择变化
      handleGenderChange(event) {
        const selectedGenderIndex = event.detail.value;
        this.user.gender = this.genderList[selectedGenderIndex].value;
      },
      // 触发头像上传
      // 处理头像变更
      async triggerAvatarUpload() {
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          // 压缩图片
          sourceType: ["album", "camera"],
          success: async (res) => {
            try {
              const filePath = res.tempFilePaths[0];
              plus.io.resolveLocalFileSystemURL(filePath, (entry) => {
                entry.file((file) => {
                  const reader = new plus.io.FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = (e) => {
                    const base64Data = e.target.result;
                    this.uploadAvatar(base64Data);
                  };
                  reader.onerror = (err) => {
                    formatAppLog("error", "at pages/index/info_manage.vue:179", "读取文件失败:", err);
                    uni.showToast({
                      title: "读取文件失败: " + err.message,
                      icon: "none"
                    });
                  };
                });
              }, (error2) => {
                formatAppLog("error", "at pages/index/info_manage.vue:187", "解析文件路径失败:", error2);
                uni.showToast({
                  title: "解析文件路径失败: " + error2.message,
                  icon: "none"
                });
              });
            } catch (error2) {
              formatAppLog("error", "at pages/index/info_manage.vue:194", "头像处理失败:", error2);
              uni.showToast({
                title: "头像处理失败: " + error2.message,
                icon: "none"
              });
            }
          }
        });
      },
      // 图片压缩方法(可选)
      compressImage(filePath) {
        return new Promise((resolve, reject) => {
          uni.compressImage({
            src: filePath,
            quality: 80,
            // 质量80%
            success: (res) => resolve(res.tempFilePath),
            fail: (err) => reject(err)
          });
        });
      },
      fileToBase64(filePath) {
        return new Promise((resolve, reject) => {
          const fs = uni.getFileSystemManager();
          fs.readFile({
            filePath,
            encoding: "base64",
            success: (res) => {
              const fileType = this.getFileType(filePath);
              resolve(`data:image/${fileType};base64,${res.data}`);
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      },
      // 获取文件类型
      getFileType(filePath) {
        const extension = filePath.split(".").pop().toLowerCase();
        return extension === "png" ? "png" : "jpeg";
      },
      async uploadAvatar(base64Data) {
        try {
          uni.showLoading({ title: "上传中..." });
          const cacheUserID = uni.getStorageSync("user_id");
          await uploadUserAvatar(cacheUserID, base64Data);
          const newAvatar = await fetchUserAvatar(cacheUserID);
          this.user.avatar = newAvatar;
          this.user.avatar = newAvatar;
          uni.showToast({
            title: "头像上传成功",
            icon: "success"
          });
        } catch (error2) {
          formatAppLog("error", "at pages/index/info_manage.vue:258", "头像上传失败:", error2);
          uni.showToast({
            title: error2.message || "头像上传失败",
            icon: "none"
          });
        } finally {
          uni.hideLoading();
        }
      },
      handleImageError() {
        this.user.avatar = this.defaultAvatar;
      },
      async saveProfile() {
        if (!this.user.username.trim()) {
          uni.showToast({ title: "用户名不能为空", icon: "none" });
          return;
        }
        if (!this.user.gender) {
          uni.showToast({ title: "请选择性别", icon: "none" });
          return;
        }
        if (!/^1[3-9]\d{9}$/.test(this.user.contact)) {
          uni.showToast({ title: "请输入有效手机号", icon: "none" });
          return;
        }
        if (this.user.password && this.user.password !== this.user.confirmPassword) {
          uni.showToast({ title: "两次输入的密码不一致", icon: "none" });
          return;
        }
        try {
          uni.showLoading({ title: "保存中..." });
          const cacheUserID = uni.getStorageSync("user_id");
          const requestData = {
            username: this.user.username,
            gender: this.user.gender,
            telephone: this.user.contact
          };
          if (this.user.password) {
            requestData.password = this.user.password;
          }
          const response = await updateUserInfo(cacheUserID, requestData);
          if (response.code === 200) {
            uni.showToast({ title: "保存成功", icon: "success" });
            this.originalUser = { ...this.user };
            this.user.password = "";
            this.user.confirmPassword = "";
            setTimeout(() => {
              uni.navigateTo({
                url: "/pages/index/person"
              });
            }, 2e3);
          } else {
            throw new Error(response.message || "保存失败");
          }
        } catch (error2) {
          formatAppLog("error", "at pages/index/info_manage.vue:330", "保存失败:", error2);
          uni.showToast({
            title: error2.message || "保存失败，请重试",
            icon: "none"
          });
        } finally {
          uni.hideLoading();
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock("div", { class: "user-profile-container" }, [
      vue.createCommentVNode(" 使用 NavigationBar 组件 "),
      vue.createVNode(_component_NavigationBar),
      vue.createElementVNode("div", { class: "profile-edit-card" }, [
        vue.createCommentVNode(" 头像上传区域 "),
        vue.createElementVNode("div", { class: "avatar-section" }, [
          vue.createElementVNode("image", {
            class: "avatar-image",
            src: $data.user.avatar,
            alt: "用户头像",
            onError: _cache[0] || (_cache[0] = (...args) => $options.handleImageError && $options.handleImageError(...args))
          }, null, 40, ["src"]),
          vue.createElementVNode(
            "button",
            {
              class: "upload-btn",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.triggerAvatarUpload && $options.triggerAvatarUpload(...args))
            },
            vue.toDisplayString($data.user.avatar === $data.defaultAvatar ? "上传头像" : "更换头像"),
            1
            /* TEXT */
          ),
          $data.avatarError ? (vue.openBlock(), vue.createElementBlock(
            "p",
            {
              key: 0,
              class: "error-message"
            },
            vue.toDisplayString($data.avatarError),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createCommentVNode(" 用户信息表单 "),
        vue.createElementVNode("div", { class: "form-section" }, [
          vue.createElementVNode("div", { class: "form-group" }, [
            vue.createElementVNode("label", { for: "username" }, "用户名"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                id: "username",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.user.username = $event),
                placeholder: "请输入用户名",
                style: { "width": "80%" }
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.user.username]
            ])
          ]),
          vue.createCommentVNode(" 新增性别选择 "),
          vue.createElementVNode("div", { class: "form-group" }, [
            vue.createElementVNode("label", { for: "gender" }, "性别"),
            vue.createElementVNode("picker", {
              mode: "selector",
              range: $data.genderList,
              "range-key": "name",
              onChange: _cache[3] || (_cache[3] = (...args) => $options.handleGenderChange && $options.handleGenderChange(...args)),
              class: "info-picker"
            }, [
              vue.createElementVNode(
                "view",
                { class: "picker-text" },
                vue.toDisplayString($data.user.gender || "请选择性别"),
                1
                /* TEXT */
              )
            ], 40, ["range"])
          ]),
          vue.createElementVNode("div", { class: "form-group" }, [
            vue.createElementVNode("label", { for: "contact" }, "联系方式"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "tel",
                id: "contact",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.user.contact = $event),
                placeholder: "请输入手机号",
                pattern: "[0-9]{11}",
                style: { "width": "80%" }
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.user.contact]
            ])
          ]),
          vue.createElementVNode("button", {
            class: "save-btn",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.saveProfile && $options.saveProfile(...args))
          }, "保存修改")
        ])
      ])
    ]);
  }
  const PagesIndexInfoManage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-2cb089b3"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/info_manage.vue"]]);
  const _imports_0$1 = "/static/QR-code.png";
  const _sfc_main$4 = {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      amount: {
        type: Number,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit("close");
      }
    },
    mounted() {
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.visible ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "modal"
    }, [
      vue.createElementVNode("view", { class: "modal-content" }, [
        vue.createElementVNode("view", { class: "modal-header" }, [
          vue.createElementVNode(
            "text",
            null,
            "请支付 " + vue.toDisplayString($props.amount) + " 元",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "modal-body" }, [
          vue.createElementVNode("img", {
            src: _imports_0$1,
            class: "qr-code",
            alt: "QR Code"
          })
        ]),
        vue.createElementVNode("view", { class: "modal-footer" }, [
          vue.createElementVNode("button", {
            class: "close-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.closeModal && $options.closeModal(...args))
          }, "关闭")
        ])
      ])
    ])) : vue.createCommentVNode("v-if", true);
  }
  const PaymentModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-d0c78149"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/components/PaymentModal.vue"]]);
  const _sfc_main$3 = {
    components: {
      NavigationBar,
      PaymentModal
    },
    data() {
      return {
        mapContext: null,
        centerLng: 121.214345,
        centerLat: 31.285985,
        trips: [{
          id: 1,
          date: "3月7日14:30",
          startPoint: "同济大学（四平校区）",
          endPoint: "四平路地铁站",
          price: 41,
          carType: "奔驰 奔驰EQC",
          orderCount: 15,
          userAvatar: "../../static/user.jpeg",
          state: "待评价"
          // 修改为待评价状态用于测试
        }],
        showPaymentModal: false,
        showRateModal: false,
        currentRating: 0,
        markers: [],
        polyline: []
      };
    },
    mounted() {
      this.initMap();
      this.drawRoute();
      this.geocodeAddress();
    },
    methods: {
      initMap() {
        this.mapContext = uni.createMapContext("uni-map");
      },
      async drawRoute() {
        const trip = this.trips[0];
        const {
          startPoint,
          endPoint
        } = trip;
        formatAppLog("log", "at pages/index/trip_info.vue:120", startPoint);
        formatAppLog("log", "at pages/index/trip_info.vue:121", endPoint);
        const [startPos, endPos] = await Promise.all([
          this.transFormAddress(startPoint),
          this.transFormAddress(endPoint)
        ]);
        if (!startPos || !endPos) {
          formatAppLog("error", "at pages/index/trip_info.vue:129", "地址解析失败");
          return;
        }
        formatAppLog("log", "at pages/index/trip_info.vue:132", startPos);
        formatAppLog("log", "at pages/index/trip_info.vue:133", endPos);
        this.centerLng = startPos[0];
        this.centerLat = startPos[1];
        this.markers = [
          {
            id: 1,
            latitude: startPos[1],
            longitude: startPos[0],
            title: "起点",
            iconPath: "../../static/start.png",
            width: 20,
            height: 20
          },
          {
            id: 2,
            latitude: endPos[1],
            longitude: endPos[0],
            title: "终点",
            iconPath: "../../static/dest.png",
            width: 20,
            height: 20
          }
        ];
        const route = await this.getDrivingRoute(startPos, endPos);
        if (route) {
          let pointsArr = [];
          route.paths[0].steps.map((step) => step.polyline).flat().map((point) => point.split(";").map((item) => {
            pointsArr.push({
              latitude: item.split(",")[1],
              longitude: item.split(",")[0]
            });
          }));
          this.polyline = [{
            points: pointsArr,
            color: "#FF0000",
            width: 6,
            dottedLine: true
          }];
        }
      },
      geocodeAddress(address) {
        return new Promise((resolve, reject) => {
          uni.getLocation({
            success: (res) => {
              resolve([res.longitude, res.latitude]);
            },
            fail: (err) => {
              formatAppLog("error", "at pages/index/trip_info.vue:186", "地址解析失败:", err);
              resolve(null);
            }
          });
        });
      },
      getDrivingRoute(startPos, endPos) {
        return new Promise((resolve, reject) => {
          uni.request({
            url: "https://restapi.amap.com/v3/direction/driving",
            data: {
              origin: startPos.join(","),
              destination: endPos.join(","),
              key: "9979fdc383e13ee57c582bc869dbd690"
              // 请替换为您的高德地图API Key
            },
            success: (res) => {
              formatAppLog("log", "at pages/index/trip_info.vue:202", res.data.status);
              if (res.data.status === "1") {
                formatAppLog("log", "at pages/index/trip_info.vue:204", res.data.route);
                resolve(res.data.route);
              } else {
                formatAppLog("error", "at pages/index/trip_info.vue:207", "驾车路径规划失败:", res.data.info);
                resolve(null);
              }
            },
            fail: (err) => {
              formatAppLog("error", "at pages/index/trip_info.vue:212", "驾车路径规划失败:", err);
              resolve(null);
            }
          });
        });
      },
      // 逆地址解析
      transFormAddress(address) {
        return new Promise((resolve, reject) => {
          uni.request({
            url: "https://restapi.amap.com/v3/geocode/geo",
            data: {
              address,
              key: "9979fdc383e13ee57c582bc869dbd690",
              output: "JSON"
            },
            success: (res) => {
              if (res.data && res.data.info == "OK") {
                let { geocodes } = res.data;
                let addrArr = geocodes[0].location.split(",");
                resolve([addrArr[0], addrArr[1]]);
              }
            },
            fail: (err) => {
              formatAppLog("error", "at pages/index/trip_info.vue:236", "逆地址解析失败:", err);
              resolve(null);
            }
          });
        });
      },
      handleButtonClick(trip) {
        if (trip.state === "待支付") {
          this.showPaymentModal = true;
        } else if (trip.state === "待评价") {
          this.applyToJoin(trip.id);
        }
      },
      showRatingModal() {
        this.showRateModal = true;
        this.currentRating = 0;
      },
      setRating(rating) {
        if (this.currentRating === rating) {
          this.currentRating = 0;
        } else {
          this.currentRating = rating;
        }
      },
      cancelRating() {
        this.showRateModal = false;
      },
      submitRating() {
        formatAppLog("log", "at pages/index/trip_info.vue:267", "提交评价:", this.currentRating);
        uni.showToast({
          title: `感谢您的评价: ${this.currentRating}星`,
          icon: "success"
        });
        this.showRateModal = false;
        this.trips[0].state = "已完成";
      },
      applyToJoin(tripId) {
      },
      closePaymentModal() {
        this.showPaymentModal = false;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    const _component_PaymentModal = vue.resolveComponent("PaymentModal");
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createCommentVNode(" 使用 NavigationBar 组件 "),
      vue.createVNode(_component_NavigationBar),
      vue.createCommentVNode(" 支付弹窗 "),
      vue.createVNode(_component_PaymentModal, {
        visible: $data.showPaymentModal,
        amount: $data.trips[0].price,
        onClose: $options.closePaymentModal
      }, null, 8, ["visible", "amount", "onClose"]),
      vue.createCommentVNode(" 评价弹窗 "),
      $data.showRateModal ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "rate-modal"
      }, [
        vue.createElementVNode("view", { class: "rate-content" }, [
          vue.createElementVNode("text", { class: "rate-title" }, "请为本次行程评分"),
          vue.createElementVNode("view", { class: "stars-container" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(5, (i2) => {
                return vue.createElementVNode("view", {
                  key: i2,
                  onClick: ($event) => $options.setRating(i2),
                  class: "star"
                }, [
                  vue.createElementVNode("image", {
                    src: i2 <= $data.currentRating ? "../../static/star-filled.png" : "../../static/star-empty.png",
                    class: "star-icon"
                  }, null, 8, ["src"])
                ], 8, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "rate-buttons" }, [
            vue.createElementVNode("button", {
              class: "cancel-button",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.cancelRating && $options.cancelRating(...args))
            }, "取消"),
            vue.createElementVNode("button", {
              class: "submit-button",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.submitRating && $options.submitRating(...args))
            }, "提交评价")
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 地图容器 "),
      vue.createElementVNode("map", {
        id: "uni-map",
        class: "map-container",
        longitude: $data.centerLng,
        latitude: $data.centerLat,
        markers: $data.markers,
        polyline: $data.polyline,
        scale: 14,
        style: { "width": "100%", "height": "400px" }
      }, null, 8, ["longitude", "latitude", "markers", "polyline"]),
      vue.createCommentVNode(" 行程详情 "),
      vue.createElementVNode("view", {
        class: "order-scroll",
        "scroll-y": "true",
        style: { "height": "calc(100vh - 200px)" }
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.trips, (trip) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "order-info",
              key: trip.id
            }, [
              vue.createElementVNode("view", { class: "order-card" }, [
                vue.createElementVNode("view", { class: "order-header" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(trip.date),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "button-container" }, [
                    trip.state === "待评价" ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 0,
                      class: "rate-button",
                      onClick: _cache[2] || (_cache[2] = (...args) => $options.showRatingModal && $options.showRatingModal(...args))
                    }, "评价")) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("button", {
                      class: "join-button",
                      onClick: ($event) => $options.handleButtonClick(trip)
                    }, vue.toDisplayString(trip.state), 9, ["onClick"])
                  ])
                ]),
                vue.createElementVNode("view", { class: "order-details" }, [
                  vue.createElementVNode("view", { class: "start-point" }, [
                    vue.createElementVNode("image", {
                      src: _imports_1$1,
                      class: "icon",
                      style: { "height": "20px", "width": "20px" }
                    }),
                    vue.createElementVNode(
                      "text",
                      { class: "order-text" },
                      vue.toDisplayString(trip.startPoint),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "departure-point" }, [
                    vue.createElementVNode("image", {
                      src: _imports_2$2,
                      class: "icon",
                      style: { "height": "20px", "width": "20px" }
                    }),
                    vue.createElementVNode(
                      "text",
                      { class: "order-text" },
                      vue.toDisplayString(trip.endPoint),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "separator" }),
                vue.createElementVNode("view", { class: "order-summary" }, [
                  vue.createElementVNode("view", { class: "summary-content" }, [
                    vue.createElementVNode("image", {
                      src: trip.userAvatar,
                      class: "user-avatar"
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "car-info" }, [
                      vue.createElementVNode("view", { class: "car-type-summary" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "car-type" },
                          vue.toDisplayString(trip.carType),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "order-count-summary" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "order-count" },
                          "接单" + vue.toDisplayString(trip.orderCount) + "次",
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "price-info" }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "price-text",
                          style: { "color": "#003366", "font-weight": "bold" }
                        },
                        "预估" + vue.toDisplayString(trip.price) + "元",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesIndexTripInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-c77841f1"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/trip_info.vue"]]);
  const _imports_0 = "/static/atm-fill.png";
  const _sfc_main$2 = {
    data() {
      return {
        latitude: 0,
        longitude: 0,
        isPassenger: true,
        searchKeyword: "",
        orders: [
          {
            id: 1,
            infoType: "乘客",
            date: "3月7日14:30",
            startPoint: "创新港(2号)停车场",
            endPoint: "上海市·台铃电动车(文汇路店)",
            price: 41,
            username: "张先生",
            passengerCount: 2,
            orderCount: 15,
            userAvatar: "../../static/user.jpeg"
          },
          {
            id: 2,
            infoType: "乘客",
            date: "3月8日08:35",
            startPoint: "纪丰路327号3号楼",
            endPoint: "苏州市·苏州大学附属理想眼科医院",
            price: 62,
            username: "李女士",
            passengerCount: 1,
            orderCount: 8,
            userAvatar: "../../static/user.jpeg"
          },
          {
            id: 3,
            infoType: "车主",
            date: "3月7日17:05",
            startPoint: "汉庭酒店(上海安亭汽车城)",
            endPoint: "南通市·丝绸路与通源路交叉口",
            price: 87,
            carType: "宝马 宝马5系",
            maxSeats: 4,
            orderCount: 12,
            userAvatar: "../../static/user.jpeg"
          }
        ]
      };
    },
    computed: {
      filteredOrders() {
        return this.orders.filter((order) => order.infoType === (this.isPassenger ? "乘客" : "车主"));
      },
      filteredAndSearchedOrders() {
        if (!this.searchKeyword) {
          return this.filteredOrders;
        }
        const keyword = this.searchKeyword.toLowerCase();
        return this.filteredOrders.filter(
          (order) => order.startPoint.toLowerCase().includes(keyword) || order.endPoint.toLowerCase().includes(keyword) || order.username && order.username.toLowerCase().includes(keyword) || order.carType && order.carType.toLowerCase().includes(keyword) || order.date.includes(keyword)
        );
      }
    },
    onLoad() {
      this.initMap();
    },
    methods: {
      initMap() {
        this.getLocation();
      },
      getLocation() {
        if (typeof wx !== "undefined" && wx.getLocation) {
          wx.getLocation({
            type: "wgs84",
            success: (res) => {
              this.latitude = res.latitude;
              this.longitude = res.longitude;
            },
            fail: (error2) => {
              formatAppLog("error", "at pages/index/home.vue:166", "获取位置失败:", error2);
            }
          });
        } else {
          formatAppLog("error", "at pages/index/home.vue:170", "当前环境不支持微信小程序的定位功能");
        }
      },
      onMapTap(e) {
        formatAppLog("log", "at pages/index/home.vue:174", "地图被点击了", e);
      },
      onMarkerTap(e) {
        formatAppLog("log", "at pages/index/home.vue:177", "标记被点击了", e);
      },
      onRegionChange(e) {
        formatAppLog("log", "at pages/index/home.vue:180", "地图区域改变", e);
      },
      toggleIdentity(identity) {
        this.isPassenger = identity === "passenger";
      },
      applyToJoin(orderId) {
      },
      handleSearch() {
      }
    },
    components: {
      // 注册 NavigationBar 组件
      NavigationBar
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("div", null, [
          vue.createCommentVNode(" 使用 NavigationBar 组件 "),
          vue.createVNode(_component_NavigationBar),
          vue.createCommentVNode(" 其他内容 ")
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("map", {
            id: "baiduMap",
            class: "map-container",
            latitude: $data.latitude,
            longitude: $data.longitude,
            scale: "16",
            "show-compass": "",
            "show-traffic": "",
            "show-scale": "",
            style: { "width": "100%", "height": "150px" },
            onTap: _cache[0] || (_cache[0] = (...args) => $options.onMapTap && $options.onMapTap(...args)),
            onMarkertap: _cache[1] || (_cache[1] = (...args) => $options.onMarkerTap && $options.onMarkerTap(...args)),
            onRegionchange: _cache[2] || (_cache[2] = (...args) => $options.onRegionChange && $options.onRegionChange(...args))
          }, null, 40, ["latitude", "longitude"]),
          vue.createElementVNode("view", { class: "bar" }, [
            vue.createElementVNode("image", {
              src: _imports_0,
              class: "icon"
            }),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "search-input",
                placeholder: "搜索栏",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.searchKeyword = $event),
                onInput: _cache[4] || (_cache[4] = (...args) => $options.handleSearch && $options.handleSearch(...args))
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [vue.vModelText, $data.searchKeyword]
            ]),
            vue.createElementVNode("view", { class: "switch" }, [
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass({ "active": $data.isPassenger }),
                  onClick: _cache[5] || (_cache[5] = ($event) => $options.toggleIdentity("passenger"))
                },
                "乘客",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass({ "active": !$data.isPassenger }),
                  onClick: _cache[6] || (_cache[6] = ($event) => $options.toggleIdentity("driver"))
                },
                "车主",
                2
                /* CLASS */
              )
            ])
          ]),
          vue.createElementVNode("scroll-view", {
            class: "order-scroll",
            "scroll-y": "true",
            style: { "height": "calc(100vh - 200px)" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredAndSearchedOrders, (order) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "order-info",
                  key: order.id
                }, [
                  vue.createElementVNode("view", { class: "order-card" }, [
                    vue.createElementVNode("view", { class: "order-header" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(order.date),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("button", {
                        class: "join-button",
                        onClick: ($event) => $options.applyToJoin(order.id)
                      }, "发单邀请Ta", 8, ["onClick"])
                    ]),
                    vue.createElementVNode("view", { class: "order-details" }, [
                      vue.createElementVNode("view", { class: "start-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_1$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "order-text" },
                          vue.toDisplayString(order.startPoint),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "departure-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_2$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "order-text" },
                          vue.toDisplayString(order.endPoint),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "separator" }),
                    vue.createElementVNode("view", { class: "order-summary" }, [
                      vue.createElementVNode("view", { class: "summary-content" }, [
                        vue.createElementVNode("image", {
                          src: order.userAvatar,
                          class: "user-avatar"
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "user-info" }, [
                          vue.createCommentVNode(" 根据身份显示不同信息 "),
                          order.infoType === "乘客" ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "passenger-info"
                          }, [
                            vue.createElementVNode(
                              "text",
                              { class: "username" },
                              vue.toDisplayString(order.username),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "passenger-count" },
                              "同乘" + vue.toDisplayString(order.passengerCount) + "人",
                              1
                              /* TEXT */
                            )
                          ])) : (vue.openBlock(), vue.createElementBlock("view", {
                            key: 1,
                            class: "driver-info"
                          }, [
                            vue.createElementVNode(
                              "text",
                              { class: "car-type" },
                              vue.toDisplayString(order.carType),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "max-seats" },
                              "可载" + vue.toDisplayString(order.maxSeats) + "人",
                              1
                              /* TEXT */
                            ),
                            vue.createCommentVNode(" 只有车主才显示接单次数 "),
                            vue.createElementVNode("view", { class: "order-count-summary" }, [
                              vue.createElementVNode(
                                "text",
                                { class: "order-count" },
                                "接单" + vue.toDisplayString(order.orderCount) + "次",
                                1
                                /* TEXT */
                              )
                            ])
                          ]))
                        ]),
                        vue.createElementVNode("view", { class: "price-info" }, [
                          vue.createElementVNode(
                            "text",
                            {
                              class: "price-text",
                              style: { "color": "#003366", "font-weight": "bold" }
                            },
                            "预估" + vue.toDisplayString(order.price) + "元",
                            1
                            /* TEXT */
                          )
                        ])
                      ])
                    ])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-760d994e"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/home.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        latitude: 0,
        longitude: 0,
        orderTypes: [
          { name: "所有", value: "all" },
          { name: "乘客", value: "passenger" },
          { name: "车主", value: "driver" }
        ],
        orderTypeIndex: 0,
        // 新增订单状态选项
        statusOptions: [
          { name: "全部", value: "all" },
          { name: "待审核", value: "pending" },
          { name: "被拒绝", value: "rejected" },
          { name: "待支付", value: "to-pay" },
          { name: "已完成", value: "completed" },
          { name: "待评价", value: "to-review" },
          { name: "未开始", value: "not-started" },
          { name: "进行中", value: "in-progress" }
        ],
        statusIndex: 0,
        years: ["", "2023", "2024", "2025"],
        // 第一个元素为空表示不筛选
        yearIndex: 0,
        months: ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        monthIndex: 0,
        days: ["", ...Array.from({ length: 31 }, (_, i) => (i + 1).toString())],
        dayIndex: 0,
        sortOptions: [
          { name: "时间升序", value: "time-asc" },
          { name: "时间降序", value: "time-desc" },
          { name: "价格升序", value: "price-asc" },
          { name: "价格降序", value: "price-desc" }
        ],
        sortIndex: 0,
        orders: [
          {
            id: 1,
            infoType: "乘客",
            date: "2023年3月7日14:30",
            // 修改日期格式便于筛选
            startPoint: "创新港(2号)停车场",
            endPoint: "上海市·台铃电动车(文汇路店)",
            price: 41,
            carType: "奔驰 奔驰EQC",
            orderCount: 15,
            userAvatar: "../../static/user.jpeg",
            status: "to-pay"
            // 新增状态字段
          },
          {
            id: 2,
            infoType: "乘客",
            date: "2025年3月8日08:35",
            startPoint: "纪丰路327号3号楼",
            endPoint: "苏州市·苏州大学附属理想眼科医院",
            price: 62,
            carType: "宝马 宝马3系",
            orderCount: 8,
            userAvatar: "../../static/user.jpeg",
            status: "completed"
          },
          {
            id: 3,
            infoType: "车主",
            date: "2024年3月7日17:05",
            startPoint: "汉庭酒店(上海安亭汽车城)",
            endPoint: "南通市·丝绸路与通源路交叉口",
            price: 87,
            carType: "宝马 宝马5系",
            orderCount: 12,
            userAvatar: "../../static/user.jpeg",
            status: "not-started"
          },
          {
            id: 4,
            infoType: "车主",
            date: "2024年3月10日09:15",
            startPoint: "上海市中心",
            endPoint: "浦东国际机场",
            price: 120,
            carType: "特斯拉 Model",
            orderCount: 20,
            userAvatar: "../../static/user.jpeg",
            status: "in-progress"
          },
          {
            id: 5,
            infoType: "乘客",
            date: "2024年3月12日18:30",
            startPoint: "虹桥火车站",
            endPoint: "静安寺",
            price: 35,
            carType: "奥迪 A4L",
            orderCount: 5,
            userAvatar: "../../static/user.jpeg",
            status: "to-review"
          },
          {
            id: 6,
            infoType: "乘客",
            date: "2024年3月15日10:00",
            startPoint: "北京西站",
            endPoint: "首都国际机场",
            price: 80,
            carType: "奥迪 A6L",
            orderCount: 3,
            userAvatar: "../../static/user.jpeg",
            status: "rejected",
            rejectReason: "出发时间不符合要求"
            // 新增拒绝原因
          }
        ]
      };
    },
    computed: {
      filteredOrders() {
        let filtered = this.orders;
        const selectedType = this.orderTypes[this.orderTypeIndex].value;
        const selectedStatus = this.statusOptions[this.statusIndex].value;
        if (selectedType !== "all") {
          filtered = filtered.filter(
            (order) => order.infoType === (selectedType === "passenger" ? "乘客" : "车主")
          );
        }
        if (selectedStatus !== "all") {
          filtered = filtered.filter((order) => order.status === selectedStatus);
        }
        const selectedYear = this.years[this.yearIndex];
        const selectedMonth = this.months[this.monthIndex];
        const selectedDay = this.days[this.dayIndex];
        if (selectedYear) {
          filtered = filtered.filter((order) => order.date.includes(`${selectedYear}年`));
        }
        if (selectedMonth) {
          filtered = filtered.filter((order) => order.date.includes(`${selectedYear || ""}年${selectedMonth}月`));
        }
        if (selectedDay) {
          filtered = filtered.filter((order) => order.date.includes(`${selectedYear || ""}年${selectedMonth || ""}月${selectedDay}日`));
        }
        const sortOption = this.sortOptions[this.sortIndex].value;
        if (sortOption === "time-asc" || sortOption === "time-desc") {
          const parseChineseDate = (dateStr) => {
            const match = dateStr.match(/(\d+)年(\d+)月(\d+)日(\d+):(\d+)/);
            if (!match)
              return 0;
            const [, year, month, day, hour, minute] = match.map(Number);
            return year * 1e6 + month * 1e4 + day * 100 + hour * 1 + minute * 0.01;
          };
          filtered.sort((a, b) => {
            const timeA = parseChineseDate(a.date);
            const timeB = parseChineseDate(b.date);
            return sortOption === "time-asc" ? timeA - timeB : timeB - timeA;
          });
        } else if (sortOption === "price-asc") {
          filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
          filtered.sort((a, b) => b.price - a.price);
        }
        return filtered;
      }
    },
    methods: {
      onOrderTypeChange(e) {
        this.orderTypeIndex = e.detail.value;
      },
      // 新增状态筛选方法
      onStatusChange(e) {
        this.statusIndex = e.detail.value;
      },
      onYearChange(e) {
        this.yearIndex = e.detail.value;
        this.monthIndex = 0;
        this.dayIndex = 0;
      },
      onMonthChange(e) {
        this.monthIndex = e.detail.value;
        this.dayIndex = 0;
      },
      onDayChange(e) {
        this.dayIndex = e.detail.value;
      },
      onSortChange(e) {
        this.sortIndex = e.detail.value;
      },
      applyToJoin(orderId) {
      },
      // 新增方法：获取状态对应的文本
      getStatusText(status) {
        const map = {
          "pending": "待审核",
          "completed": "已完成",
          "to-review": "待评价",
          "not-started": "未开始",
          "in-progress": "进行中",
          "to-pay": "待支付",
          "rejected": "被拒绝"
        };
        return map[status] || "未知状态";
      },
      // 新增方法：处理状态标签点击
      handleStatusClick(order) {
        if (order.status === "not-started") {
          uni.showModal({
            title: "确认删除",
            content: "确定要删除此订单吗？",
            success: (res) => {
              if (res.confirm) {
                this.deleteOrder(order.id);
              }
            }
          });
        }
      },
      // 新增方法：删除订单
      deleteOrder(orderId) {
        this.orders = this.orders.filter((order) => order.id !== orderId);
        uni.showToast({
          title: "订单已删除",
          icon: "success"
        });
      }
    },
    components: {
      // 注册 NavigationBar 组件
      NavigationBar
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavigationBar = vue.resolveComponent("NavigationBar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("div", null, [
          vue.createCommentVNode(" 使用 NavigationBar 组件 "),
          vue.createVNode(_component_NavigationBar),
          vue.createCommentVNode(" 其他内容 ")
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "filter-bar" }, [
            vue.createElementVNode("view", { class: "dual-filter-row" }, [
              vue.createElementVNode("view", { class: "filter-group" }, [
                vue.createElementVNode("picker", {
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onOrderTypeChange && $options.onOrderTypeChange(...args)),
                  value: $data.orderTypeIndex,
                  range: $data.orderTypes,
                  "range-key": "name"
                }, [
                  vue.createElementVNode("view", { class: "picker" }, [
                    vue.createTextVNode(
                      " 订单类型: " + vue.toDisplayString($data.orderTypes[$data.orderTypeIndex].name) + " ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("image", {
                      src: _imports_0$2,
                      class: "arrow-icon"
                    })
                  ])
                ], 40, ["value", "range"])
              ]),
              vue.createCommentVNode(" 订单状态筛选 "),
              vue.createElementVNode("view", { class: "filter-group" }, [
                vue.createElementVNode("picker", {
                  onChange: _cache[1] || (_cache[1] = (...args) => $options.onStatusChange && $options.onStatusChange(...args)),
                  value: $data.statusIndex,
                  range: $data.statusOptions,
                  "range-key": "name"
                }, [
                  vue.createElementVNode("view", { class: "picker" }, [
                    vue.createTextVNode(
                      " 订单状态: " + vue.toDisplayString($data.statusOptions[$data.statusIndex].name) + " ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("image", {
                      src: _imports_0$2,
                      class: "arrow-icon"
                    })
                  ])
                ], 40, ["value", "range"])
              ])
            ]),
            vue.createElementVNode("view", { class: "time-filters" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[2] || (_cache[2] = (...args) => $options.onYearChange && $options.onYearChange(...args)),
                value: $data.yearIndex,
                range: $data.years,
                class: "time-picker"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    vue.toDisplayString($data.years[$data.yearIndex] || "--") + "年 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"]),
              vue.createElementVNode("picker", {
                onChange: _cache[3] || (_cache[3] = (...args) => $options.onMonthChange && $options.onMonthChange(...args)),
                value: $data.monthIndex,
                range: $data.months,
                class: "time-picker"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    vue.toDisplayString($data.months[$data.monthIndex] || "--") + "月 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"]),
              vue.createElementVNode("picker", {
                onChange: _cache[4] || (_cache[4] = (...args) => $options.onDayChange && $options.onDayChange(...args)),
                value: $data.dayIndex,
                range: $data.days,
                class: "time-picker"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    vue.toDisplayString($data.days[$data.dayIndex] || "--") + "日 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"])
            ]),
            vue.createElementVNode("view", { class: "filter-group" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[5] || (_cache[5] = (...args) => $options.onSortChange && $options.onSortChange(...args)),
                value: $data.sortIndex,
                range: $data.sortOptions,
                "range-key": "name"
              }, [
                vue.createElementVNode("view", { class: "picker" }, [
                  vue.createTextVNode(
                    " 排序: " + vue.toDisplayString($data.sortOptions[$data.sortIndex].name) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    class: "arrow-icon"
                  })
                ])
              ], 40, ["value", "range"])
            ])
          ]),
          vue.createElementVNode("scroll-view", {
            class: "order-scroll",
            "scroll-y": "true",
            style: { "height": "calc(100vh - 200px)" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredOrders, (order) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "order-info",
                  key: order.id
                }, [
                  vue.createElementVNode("view", { class: "order-card" }, [
                    vue.createElementVNode("view", { class: "order-header" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(order.date),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("button", {
                        class: "detail-button",
                        onClick: ($event) => $options.applyToJoin(order.id)
                      }, "查看详情", 8, ["onClick"])
                    ]),
                    vue.createElementVNode("view", { class: "order-details" }, [
                      vue.createElementVNode("view", { class: "start-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_1$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "order-text" },
                          vue.toDisplayString(order.startPoint),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "departure-point" }, [
                        vue.createElementVNode("image", {
                          src: _imports_2$1,
                          class: "icon",
                          style: { "height": "20px", "width": "20px" }
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "order-text" },
                          vue.toDisplayString(order.endPoint),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "separator" }),
                    vue.createElementVNode("view", { class: "order-summary" }, [
                      vue.createElementVNode("view", { class: "summary-content" }, [
                        vue.createElementVNode("image", {
                          src: order.userAvatar,
                          class: "user-avatar"
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "car-info" }, [
                          vue.createElementVNode("view", { class: "car-type-summary" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "car-type" },
                              vue.toDisplayString(order.carType),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode("view", { class: "order-count-summary" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "order-count" },
                              "接单" + vue.toDisplayString(order.orderCount) + "次",
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "price-info" }, [
                          vue.createCommentVNode(" 新增订单状态标签 "),
                          vue.createElementVNode("view", { class: "status-container" }, [
                            vue.createElementVNode("view", {
                              class: vue.normalizeClass(["status-tag", "status-" + order.status]),
                              onClick: ($event) => $options.handleStatusClick(order)
                            }, vue.toDisplayString($options.getStatusText(order.status)), 11, ["onClick"])
                          ]),
                          vue.createElementVNode(
                            "text",
                            {
                              class: "price-text",
                              style: { "color": "#003366", "font-weight": "bold" }
                            },
                            "预估" + vue.toDisplayString(order.price) + "元",
                            1
                            /* TEXT */
                          )
                        ])
                      ])
                    ]),
                    vue.createCommentVNode(" 新增：拒绝原因显示 "),
                    order.status === "rejected" && order.rejectReason ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "audit-reason"
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        "拒绝原因: " + vue.toDisplayString(order.rejectReason),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexRecord = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-01d8b9db"], ["__file", "C:/Users/jiang/Desktop/car-sharing/car/pages/index/record.vue"]]);
  __definePage("pages/index/chatlist", PagesIndexChatlist);
  __definePage("pages/index/chat", PagesIndexChat);
  __definePage("pages/index/login", PagesIndexLogin);
  __definePage("pages/index/register", PagesIndexRegister);
  __definePage("pages/index/car_manage", PagesIndexCarManage);
  __definePage("pages/index/manage", PagesIndexManage);
  __definePage("pages/index/order_launch", PagesIndexOrderLaunch);
  __definePage("pages/index/person", PagesIndexPerson);
  __definePage("pages/index/calendar", PagesIndexCalendar);
  __definePage("pages/index/info_manage", PagesIndexInfoManage);
  __definePage("pages/index/home", PagesIndexHome);
  __definePage("pages/index/record", PagesIndexRecord);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/jiang/Desktop/car-sharing/car/App.vue"]]);
  const pages = [
    {
      path: "pages/index/chatlist",
      style: {
        navigationBarTitleText: "聊天列表"
      }
    },
    {
      path: "pages/index/chat",
      style: {
        navigationBarTitleText: "拼友聊天"
      }
    },
    {
      path: "pages/index/login",
      style: {
        navigationBarTitleText: "用户登录"
      }
    },
    {
      path: "pages/index/register",
      style: {
        navigationBarTitleText: "用户注册"
      }
    },
    {
      path: "pages/index/car_manage",
      style: {
        navigationBarTitleText: "车牌管理"
      }
    },
    {
      path: "pages/index/manage",
      style: {
        navigationBarTitleText: "管理拼车"
      }
    },
    {
      path: "pages/index/order_launch",
      style: {
        navigationBarTitleText: "发布拼车"
      }
    },
    {
      path: "pages/index/person",
      style: {
        navigationBarTitleText: "个人主页"
      }
    },
    {
      path: "pages/index/calendar",
      style: {
        navigationBarTitleText: "拼车日历"
      }
    },
    {
      path: "pages/index/info_manage",
      style: {
        navigationBarTitleText: "信息修改"
      }
    },
    {
      path: "pages/index/trip_info",
      style: {
        navigationBarTitleText: "行程详情"
      }
    },
    {
      path: "pages/index/home",
      style: {
        navigationBarTitleText: "济智出行"
      }
    },
    {
      path: "pages/index/record",
      style: {
        navigationBarTitleText: "拼车记录"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const uniIdRouter = {};
  const condition = {
    current: 0,
    list: [
      {
        name: "",
        path: "",
        query: ""
      }
    ]
  };
  const e = {
    pages,
    globalStyle,
    uniIdRouter,
    condition
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], T2 = e4[t4 + 14], A2 = e4[t4 + 15], P2 = i3[0], C2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, C2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, C2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, C2, p2, 17, a2[2]), C2 = u2(C2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, C2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, C2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, C2, y2, 17, a2[6]), C2 = u2(C2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, C2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, C2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, C2, I2, 17, a2[10]), C2 = u2(C2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, C2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, C2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, C2, T2, 17, a2[14]), P2 = h2(P2, C2 = u2(C2, x2, O2, P2, A2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, P2, C2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, P2, C2, S2, 14, a2[18]), C2 = h2(C2, x2, O2, P2, o3, 20, a2[19]), P2 = h2(P2, C2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, P2, C2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, P2, C2, A2, 14, a2[22]), C2 = h2(C2, x2, O2, P2, g2, 20, a2[23]), P2 = h2(P2, C2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, P2, C2, x2, T2, 9, a2[25]), x2 = h2(x2, O2, P2, C2, f2, 14, a2[26]), C2 = h2(C2, x2, O2, P2, w2, 20, a2[27]), P2 = h2(P2, C2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, P2, C2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, P2, C2, _2, 14, a2[30]), P2 = l2(P2, C2 = h2(C2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, P2, C2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, P2, C2, S2, 16, a2[34]), C2 = l2(C2, x2, O2, P2, T2, 23, a2[35]), P2 = l2(P2, C2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, P2, C2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, P2, C2, _2, 16, a2[38]), C2 = l2(C2, x2, O2, P2, I2, 23, a2[39]), P2 = l2(P2, C2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, P2, C2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, P2, C2, f2, 16, a2[42]), C2 = l2(C2, x2, O2, P2, y2, 23, a2[43]), P2 = l2(P2, C2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, P2, C2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, P2, C2, A2, 16, a2[46]), P2 = d2(P2, C2 = l2(C2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, C2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, C2, T2, 15, a2[50]), C2 = d2(C2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, C2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, C2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, C2, I2, 15, a2[54]), C2 = d2(C2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, C2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, C2, x2, A2, 10, a2[57]), x2 = d2(x2, O2, P2, C2, y2, 15, a2[58]), C2 = d2(C2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, C2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, C2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, C2, p2, 15, a2[62]), C2 = d2(C2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", h = "CLIENT_DB", l = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", T = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), A = b, P = I('{"address":["127.0.0.1","10.0.0.8"],"servePort":7000,"debugPort":9000,"initialLaunchType":"local","skipFiles":["<node_internals>/**","C:/Users/jiang/Downloads/HBuilderX.4.45.2025010502/HBuilderX/plugins/unicloud/**/*.js"]}'), C = I('[{"provider":"aliyun","spaceName":"se-car-sharing","spaceId":"mp-de78a359-5c09-4821-9118-383f0a74d571","clientSecret":"mwYkvIErkUCe0XTiWPZ0yA==","endpoint":"https://api.next.bspapp.com"}]') || [];
  let O = "";
  try {
    O = "__UNI__0E80EA1";
  } catch (e2) {
  }
  let E, L = {};
  function R(e2, t2 = {}) {
    var n2, s2;
    return n2 = L, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (L[e2] = t2), L[e2];
  }
  function U() {
    return E || (E = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      function e2() {
        return this;
      }
      return void 0 !== e2() ? e2() : new Function("return this")();
    }(), E);
  }
  L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const N = ["invoke", "success", "fail", "complete"], D = R("_globalUniCloudInterceptor");
  function M(e2, t2) {
    D[e2] || (D[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = D[e3][t3];
        s2 || (s2 = D[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function q(e2, t2) {
    D[e2] || (D[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = D[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete D[e2];
  }
  function K(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function F(e2, t2) {
    return D[e2] && D[e2][t2] || [];
  }
  function j(e2) {
    M("callObject", e2);
  }
  const $ = R("_globalUniCloudListener"), B = "response", W = "needLogin", H = "refreshToken", J = "clientdb", z = "cloudfunction", V = "cloudobject";
  function G(e2) {
    return $[e2] || ($[e2] = []), $[e2];
  }
  function Y(e2, t2) {
    const n2 = G(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function Q(e2, t2) {
    const n2 = G(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function X(e2, t2) {
    const n2 = G(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Z, ee = false;
  function te() {
    return Z || (Z = new Promise((e2) => {
      ee && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (ee = true, e2());
        }
        ee || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Z);
  }
  function ne(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class se extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var re = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function ie(e2) {
    return e2 && ie(e2.__v_raw) || e2;
  }
  function oe() {
    return { token: re.getStorageSync("uni_id_token") || re.getStorageSync("uniIdToken"), tokenExpired: re.getStorageSync("uni_id_token_expired") };
  }
  function ae({ token: e2, tokenExpired: t2 } = {}) {
    e2 && re.setStorageSync("uni_id_token", e2), t2 && re.setStorageSync("uni_id_token_expired", t2);
  }
  let ce, ue;
  function he() {
    return ce || (ce = uni.getSystemInfoSync()), ce;
  }
  function le() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let de = {};
  function pe() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ue)
      return { ...de, ...ue, locale: e2, LOCALE: e2 };
    const t2 = he(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return ue = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...le(), ...t2 }, { ...de, ...ue, locale: e2, LOCALE: e2 };
  }
  var fe = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new se({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new se({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var ge = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = re, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new se({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return fe.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = fe.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = fe.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request({ ...this.setupRequest(t2), timeout: e2.timeout });
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new se({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new se({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new se({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new se({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new se({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new se({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = fe.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new se({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new se({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new se({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var me = { init(e2) {
    const t2 = new ge(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var _e;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(_e || (_e = {}));
  var we = function() {
  }, ve = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), Ie = ve, Se = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const be = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new se({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function ke(e2) {
    return void 0 === e2;
  }
  function Te(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  function Ae(e2 = "") {
    return e2.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
  }
  function Pe(e2 = 32) {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n2 = t2.length;
    let s2 = "";
    for (let r2 = 0; r2 < e2; r2++)
      s2 += t2.charAt(Math.floor(Math.random() * n2));
    return s2;
  }
  var Ce;
  function xe(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(Ce || (Ce = {}));
  const Oe = { adapter: null, runtime: void 0 }, Ee = ["anonymousUuidKey"];
  class Le extends we {
    constructor() {
      super(), Oe.adapter.root.tcbObject || (Oe.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Oe.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Oe.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Oe.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Oe.adapter.root.tcbObject;
    }
  }
  function Re(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Le();
      case "none":
        return new Le();
      default:
        return t2.sessionStorage || new Le();
    }
  }
  class Ue {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Oe.adapter.primaryStorage || e2.persistence, this._storage = Re(this._persistence, Oe.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = "device_id", a2 = `token_type_${e2.env}`, c2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: c2, deviceIdKey: o2, tokenTypeKey: a2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Re(e2, Oe.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Ee.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        ke(r2) || Te(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Ne = {}, De = {};
  function Me(e2) {
    return Ne[e2];
  }
  class qe {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ke extends qe {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Fe = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ke)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new qe(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function je(e2, t2) {
    Fe.on(e2, t2);
  }
  function $e(e2, t2 = {}) {
    Fe.fire(e2, t2);
  }
  function Be(e2, t2) {
    Fe.off(e2, t2);
  }
  const We = "loginStateChanged", He = "loginStateExpire", Je = "loginTypeChanged", ze = "anonymousConverted", Ve = "refreshAccessToken";
  var Ge;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(Ge || (Ge = {}));
  class Ye {
    constructor() {
      this._fnPromiseMap = /* @__PURE__ */ new Map();
    }
    async run(e2, t2) {
      let n2 = this._fnPromiseMap.get(e2);
      return n2 || (n2 = new Promise(async (n3, s2) => {
        try {
          await this._runIdlePromise();
          const s3 = t2();
          n3(await s3);
        } catch (e3) {
          s2(e3);
        } finally {
          this._fnPromiseMap.delete(e2);
        }
      }), this._fnPromiseMap.set(e2, n2)), n2;
    }
    _runIdlePromise() {
      return Promise.resolve();
    }
  }
  class Qe {
    constructor(e2) {
      this._singlePromise = new Ye(), this._cache = Me(e2.env), this._baseURL = `https://${e2.env}.ap-shanghai.tcb-api.tencentcloudapi.com`, this._reqClass = new Oe.adapter.reqClass({ timeout: e2.timeout, timeoutMsg: `请求在${e2.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] });
    }
    _getDeviceId() {
      if (this._deviceID)
        return this._deviceID;
      const { deviceIdKey: e2 } = this._cache.keys;
      let t2 = this._cache.getStore(e2);
      return "string" == typeof t2 && t2.length >= 16 && t2.length <= 48 || (t2 = Pe(), this._cache.setStore(e2, t2)), this._deviceID = t2, t2;
    }
    async _request(e2, t2, n2 = {}) {
      const s2 = { "x-request-id": Pe(), "x-device-id": this._getDeviceId() };
      if (n2.withAccessToken) {
        const { tokenTypeKey: e3 } = this._cache.keys, t3 = await this.getAccessToken(), n3 = this._cache.getStore(e3);
        s2.authorization = `${n3} ${t3}`;
      }
      return this._reqClass["get" === n2.method ? "get" : "post"]({ url: `${this._baseURL}${e2}`, data: t2, headers: s2 });
    }
    async _fetchAccessToken() {
      const { loginTypeKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2, tokenTypeKey: s2 } = this._cache.keys, r2 = this._cache.getStore(e2);
      if (r2 && r2 !== Ge.ANONYMOUS)
        throw new se({ code: "INVALID_OPERATION", message: "非匿名登录不支持刷新 access token" });
      const i2 = await this._singlePromise.run("fetchAccessToken", async () => (await this._request("/auth/v1/signin/anonymously", {}, { method: "post" })).data), { access_token: o2, expires_in: a2, token_type: c2 } = i2;
      return this._cache.setStore(s2, c2), this._cache.setStore(t2, o2), this._cache.setStore(n2, Date.now() + 1e3 * a2), o2;
    }
    isAccessTokenExpired(e2, t2) {
      let n2 = true;
      return e2 && t2 && (n2 = t2 < Date.now()), n2;
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this.isAccessTokenExpired(n2, s2) ? this._fetchAccessToken() : n2;
    }
    async refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, loginTypeKey: n2 } = this._cache.keys;
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.setStore(n2, Ge.ANONYMOUS), this.getAccessToken();
    }
    async getUserInfo() {
      return this._singlePromise.run("getUserInfo", async () => (await this._request("/auth/v1/user/me", {}, { withAccessToken: true, method: "get" })).data);
    }
  }
  const Xe = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Ze = { "X-SDK-Version": "1.3.5" };
  function et(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function tt() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...Ze, "x-seqid": e2 } };
  }
  class nt {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Oe.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Me(this.config.env), this._localCache = (t2 = this.config.env, De[t2]), this.oauth = new Qe(this.config), et(this._reqClass, "post", [tt]), et(this._reqClass, "upload", [tt]), et(this._reqClass, "download", [tt]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new se({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === Ge.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          $e(He), this._cache.removeStore(n2);
        }
        throw new se({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return $e(Ve), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new se({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      let o2;
      if (-1 === Xe.indexOf(e2) && (this._cache.keys, i2.access_token = await this.oauth.getAccessToken()), "storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(ye, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new se({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}, n2 = {}) {
      const s2 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
      if (("ACCESS_TOKEN_DISABLED" === s2.data.code || "ACCESS_TOKEN_EXPIRED" === s2.data.code) && -1 === Xe.indexOf(e2)) {
        await this.oauth.refreshAccessToken();
        const s3 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
        if (s3.data.code)
          throw new se({ code: s3.data.code, message: Ae(s3.data.message) });
        return s3.data;
      }
      if (s2.data.code)
        throw new se({ code: s2.data.code, message: Ae(s2.data.message) });
      return s2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const st = {};
  function rt(e2) {
    return st[e2];
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Me(e2.env), this._request = rt(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class ot {
    constructor(e2) {
      if (!e2)
        throw new se({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Me(this._envId), this._request = rt(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const e2 = await this._request.oauth.getUserInfo();
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class at {
    constructor(e2) {
      if (!e2)
        throw new se({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Me(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new ot(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === Ge.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Ge.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Ge.WECHAT || this.loginType === Ge.WECHAT_OPEN || this.loginType === Ge.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class ct extends it {
    async signIn() {
      this._cache.updatePersistence("local"), await this._request.oauth.getAccessToken(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.ANONYMOUS, persistence: "local" });
      const e2 = new at(this.config.env);
      return await e2.user.refresh(), e2;
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), $e(ze, { env: this.config.env }), $e(Je, { loginType: Ge.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new se({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, Ge.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class ut extends it {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new at(this.config.env);
      throw new se({ message: "自定义登录失败" });
    }
  }
  class ht extends it {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.EMAIL, persistence: this.config.persistence }), new at(this.config.env);
      throw s2.code ? new se({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new se({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class lt extends it {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Ge.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.USERNAME, persistence: this.config.persistence }), new at(this.config.env);
      throw s2.code ? new se({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new se({ message: "用户名密码登录失败" });
    }
  }
  class dt {
    constructor(e2) {
      this.config = e2, this._cache = Me(e2.env), this._request = rt(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), je(Je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ct(this.config);
    }
    customAuthProvider() {
      return new ut(this.config);
    }
    emailAuthProvider() {
      return new ht(this.config);
    }
    usernameAuthProvider() {
      return new lt(this.config);
    }
    async signInAnonymously() {
      return new ct(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new ht(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new lt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new ct(this.config)), je(ze, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === Ge.ANONYMOUS)
        throw new se({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), $e(We), $e(Je, { env: this.config.env, loginType: Ge.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      je(We, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      je(He, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      je(Ve, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      je(ze, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      je(Je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this._request.oauth.isAccessTokenExpired(n2, s2) ? null : new at(this.config.env);
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new ut(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const pt = function(e2, t2) {
    t2 = t2 || be();
    const n2 = rt(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new se({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ft = function(e2, t2) {
    t2 = t2 || be();
    const n2 = rt(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, gt = function({ fileList: e2 }, t2) {
    if (t2 = t2 || be(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return rt(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, mt = function({ fileList: e2 }, t2) {
    t2 = t2 || be(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return rt(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, yt = async function({ fileID: e2 }, t2) {
    const n2 = (await mt.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = rt(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, _t = function({ name: e2, data: t2, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
    const a2 = o2 || be();
    let c2;
    try {
      c2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new se({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
    return rt(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
      if (e3.code)
        a2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          a2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            a2(new se({ message: "response data must be json" }));
          }
      }
      return a2.promise;
    }).catch((e3) => {
      a2(e3);
    }), a2.promise;
  }, wt = { timeout: 15e3, persistence: "session" }, vt = {};
  class It {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Oe.adapter || (this.requestClient = new Oe.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...wt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new It(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Oe.adapter.primaryStorage || wt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Ne[t3] = new Ue(e3), De[t3] = new Ue({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, st[n2.env] = new nt(n2), this.authObj = new dt(this.config), this.authObj;
    }
    on(e2, t2) {
      return je.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return Be.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return _t.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return gt.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return mt.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return yt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return pt.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return ft.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      vt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = vt[e2];
      if (!n2)
        throw new se({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = xe(e2) || {};
      t2 && (Oe.adapter = t2), n2 && (Oe.runtime = n2);
    }
  }
  var St = new It();
  function bt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class kt {
    get(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        re.request({ url: bt("https:", t2), data: n2, method: "GET", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    post(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        re.request({ url: bt("https:", t2), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = re.uploadFile({ url: bt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Tt = { setItem(e2, t2) {
    re.setStorageSync(e2, t2);
  }, getItem: (e2) => re.getStorageSync(e2), removeItem(e2) {
    re.removeStorageSync(e2);
  }, clear() {
    re.clearStorageSync();
  } };
  var At = { genAdapter: function() {
    return { root: {}, reqClass: kt, localStorage: Tt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  St.useAdapters(At);
  const Pt = St, Ct = Pt.init;
  Pt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = Ct.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ne(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var xt = Pt;
  async function Ot(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        re.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Et(e2, t2) {
    let n2;
    for (let s2 = 0; s2 < e2.length; s2++) {
      const r2 = e2[s2];
      if (await Ot(r2, t2)) {
        n2 = r2;
        break;
      }
    }
    return { address: n2, port: t2 };
  }
  const Lt = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url" };
  var Rt = class {
    constructor(e2) {
      if (["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), !e2.endpoint)
        throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
      this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = re;
    }
    async request(e2, t2 = true) {
      const n2 = t2;
      return e2 = n2 ? await this.setupLocalRequest(e2) : this.setupRequest(e2), Promise.resolve().then(() => n2 ? this.requestLocal(e2) : fe.wrappedRequest(e2, this.adapter.request));
    }
    requestLocal(e2) {
      return new Promise((t2, n2) => {
        this.adapter.request(Object.assign(e2, { complete(e3) {
          if (e3 || (e3 = {}), !e3.statusCode || e3.statusCode >= 400) {
            const t3 = e3.data && e3.data.code || "SYS_ERR", s2 = e3.data && e3.data.message || "request:fail";
            return n2(new se({ code: t3, message: s2 }));
          }
          t2({ success: true, result: e3.data });
        } }));
      });
    }
    setupRequest(e2) {
      const t2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      n2["x-serverless-sign"] = fe.sign(t2, this.config.clientSecret);
      const s2 = pe();
      n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
      const { token: r2 } = oe();
      return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t2, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    async setupLocalRequest(e2) {
      const t2 = pe(), { token: n2 } = oe(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t2, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = await Et(r2, i2);
      return { url: `http://${o2}:${i2}/${Lt[e2.method]}`, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(t2, false);
    }
    getUploadFileOptions(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    reportUploadFile(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new se({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getUploadFileOptions({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
          const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
            e3 && e3.statusCode < 400 ? t4(e3) : r3(new se({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
          }, fail(e3) {
            r3(new se({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
          } });
          "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
            s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
          });
        });
      }).then(() => this.reportUploadFile({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new se({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(t2).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new se({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new se({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(n2).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new se({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var Ut = { init(e2) {
    const t2 = new Rt(e2), n2 = { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Nt = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Dt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function Mt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = String(Date.now()), u2 = Dt(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = Ie(e3.body).toString(Nt), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = Ie(r3).toString(Nt), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = Se(o3, e3.secretKey).toString(Nt);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function qt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
    return new Promise((i2, o2) => {
      re.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return o2(new se({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Kt(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Mt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return qt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new se({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new se({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Ft(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new se({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function jt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class $t {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Dt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", Ie(i2).toString(Nt)].join("\n"), a2 = Se(o2, this.config.secretKey).toString(Nt), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  }
  var Bt = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new $t(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
        r2 && (a2["x-function-invoke-type"] = "async");
        const { url: c2, headers: u2 } = Mt("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return qt({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new se({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new se({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = re.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new se({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new se({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new se({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new se({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new se({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Kt({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && t2({ code: "INVALID_PARAM", message: "fileList不能为空数组" }), e2.length > 50 && t2({ code: "INVALID_PARAM", message: "fileList数组长度不能超过50" });
        const s2 = [];
        for (const n3 of e2) {
          let e3;
          "string" !== f(n3) && t2({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
          try {
            e3 = Ft.call(this, n3);
          } catch (t3) {
            console.warn(t3.errCode, t3.errMsg), e3 = n3;
          }
          s2.push({ file_id: e3, expire: 600 });
        }
        Kt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: jt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return re.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
  };
  var Wt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Bt(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Ht({ data: e2 }) {
    let t2;
    t2 = pe();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = oe();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Jt(e2 = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: t2, localPort: n2 } = this.__dev__, s2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${t2}:${n2}/system/check-function`, o2 = `http://${t2}:${n2}/cloudfunctions/${e2.name}`;
    return new Promise((t3, n3) => {
      re.request({ method: "POST", url: i2, data: { name: e2.name, platform: A, provider: s2, spaceId: r2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: t3, message: n3 }) => {
      if (0 !== t3) {
        switch (t3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2.name}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2.name}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(n3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR":
            console.error(n3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
            break;
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${n3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction(e2);
      }
      return new Promise((t4, n4) => {
        const r3 = Ht.call(this, { data: e2.data });
        re.request({ method: "POST", url: o2, data: { provider: s2, platform: A, param: r3 }, timeout: e2.timeout, success: ({ statusCode: e3, data: s3 } = {}) => !e3 || e3 >= 400 ? n4(new se({ code: s3.code || "SYS_ERR", message: s3.message || "request:fail" })) : t4({ result: s3 }), fail(e3) {
          n4(new se({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const zt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Vt = /[\\^$.*+?()[\]{}|]/g, Gt = RegExp(Vt.source);
  function Yt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Gt.test(s2) ? s2.replace(Vt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Xt = "request", Zt = "response", en = "both";
  const Mn = { code: 2e4, message: "System error" }, qn = { code: 20101, message: "Invalid client" };
  function jn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new se({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || Mn.code, message: r2 || o2, cause: a2 });
  }
  let Bn;
  function Vn({ secretType: e2 } = {}) {
    return e2 === Xt || e2 === Zt || e2 === en;
  }
  function Gn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function Yn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = he();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = T;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), jn(qn);
  }
  function Qn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Xn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Ht.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = Vn(n3), o2 = Gn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Yt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Yt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: zt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Jt), o2 = Jt) : o2 = n2, o2 = o2.bind(e2), Gn(t3))
        a2 = n2.call(e2, t3);
      else if (Vn(t3)) {
        a2 = new Bn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (Yn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Bn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && "undefined" != typeof UTS && (e3.result = UTS.JSON.parse(JSON.stringify(e3.result))), e3));
    };
  }
  Bn = class {
    constructor() {
      throw jn({ message: `Platform ${A} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Zn = Symbol("CLIENT_DB_INTERNAL");
  function es(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Zn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function ts(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const ns = ["db.Geo", "db.command", "command.aggregate"];
  function ss(e2, t2) {
    return ns.indexOf(`${e2}.${t2}`) > -1;
  }
  function rs(e2) {
    switch (f(e2 = ie(e2))) {
      case "array":
        return e2.map((e3) => rs(e3));
      case "object":
        return e2._internalType === Zn || Object.keys(e2).forEach((t2) => {
          e2[t2] = rs(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function is(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class os {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: rs(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = is(e2), n2 = is(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === is(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = is(e2), n2 = is(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return as({ $method: e2, $param: rs(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: rs(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function as(e2, t2, n2) {
    return es(new os(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), ss(s2, t3) ? as({ $method: t3 }, e3, n2) : function() {
        return as({ $method: t3, $param: rs(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function cs({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function us(e2, t2 = {}) {
    return es(new e2(t2), { get: (e3, t3) => ss("db", t3) ? as({ $method: t3 }, null, e3) : function() {
      return as({ $method: t3, $param: rs(Array.from(arguments)) }, null, e3);
    } });
  }
  class hs extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = R("_globalUniCloudDatabaseCallback")), t2 || (this.auth = ts(this._authCallBacks)), this._isJQL = t2, Object.assign(this, ts(this._dbCallBacks)), this.env = es({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = es({}, { get: (e3, t3) => cs({ path: ["Geo"], method: t3 }) }), this.serverDate = cs({ path: [], method: "serverDate" }), this.RegExp = cs({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), K(F(o2, "fail"), e3).then(() => K(F(o2, "complete"), e3)).then(() => (r2(null, e3), X(B, { type: J, content: e3 }), Promise.reject(e3)));
      }
      const c2 = K(F(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new se({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ae({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), X(H, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return K(F(o2, "success"), e4).then(() => K(F(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return X(B, { type: J, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new se({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const ls = "token无效，跳转登录页面", ds = "token过期，跳转登录页面", ps = { TOKEN_INVALID_TOKEN_EXPIRED: ds, TOKEN_INVALID_INVALID_CLIENTID: ls, TOKEN_INVALID: ls, TOKEN_INVALID_WRONG_TOKEN: ls, TOKEN_INVALID_ANONYMOUS_USER: ls }, fs = { "uni-id-token-expired": ds, "uni-id-check-token-failed": ls, "uni-id-token-not-exist": ls, "uni-id-check-device-feature-failed": ls };
  function gs(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function ms(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(gs(t2, e3.path)) : false === e3.needLogin && s2.push(gs(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function ys(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function _s() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function ws() {
    return ys(_s());
  }
  function vs(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = ys(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const Is = !!e.uniIdRouter;
  const { loginPage: Ss, routerNeedLogin: bs, resToLogin: ks, needLoginPage: Ts, notNeedLoginPage: As, loginPageInTabBar: Ps } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = ms(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = ms(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: vs(i2, r2) };
  }();
  if (Ts.indexOf(Ss) > -1)
    throw new Error(`Login page [${Ss}] should not be "needLogin", please check your pages.json`);
  function Cs(e2) {
    const t2 = ws();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function xs(e2) {
    const t2 = ys(Cs(e2));
    return !(As.indexOf(t2) > -1) && (Ts.indexOf(t2) > -1 || bs.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Os({ redirect: e2 }) {
    const t2 = ys(e2), n2 = ys(Ss);
    return ws() !== n2 && t2 !== n2;
  }
  function Es({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !Os({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(Ss, t2);
    Ps ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function Ls({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = oe();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: fs[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: fs[e4] };
      }
      return n3;
    }();
    if (xs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (G(W).length > 0)
        return setTimeout(() => {
          X(W, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Rs() {
    !function() {
      const e3 = _s(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = Ls({ url: e3 });
      t2 || n2 && Es({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Ls({ url: e3.url });
        return t3 ? e3 : s2 ? (Es({ api: n2, redirect: Cs(e3.url) }), false) : e3;
      } });
    }
  }
  function Us() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in fs;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ps;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = G(W);
        te().then(() => {
          const n3 = _s();
          if (n3 && Os({ redirect: n3 }))
            return t3.length > 0 ? X(W, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (Ss && Es({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Ns(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        Y(B, e4);
      }, e3.offResponse = function(e4) {
        Q(B, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        Y(W, e4);
      }, e3.offNeedLogin = function(e4) {
        Q(W, e4);
      }, Is && (R("_globalUniCloudStatus").needLoginInit || (R("_globalUniCloudStatus").needLoginInit = true, te().then(() => {
        Rs.call(e3);
      }), ks && Us.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        Y(H, e4);
      }, e3.offRefreshToken = function(e4) {
        Q(H, e4);
      };
    }(e2);
  }
  let Ds;
  const Ms = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", qs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ks() {
    const e2 = oe().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Ds(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Ds = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !qs.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = Ms.indexOf(e2.charAt(i2++)) << 18 | Ms.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ms.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ms.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Fs = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), js = t(Fs);
  const $s = "manual";
  function Bs(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === $s)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ws(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await K(F(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await K(F(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await K(F(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await K(F(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...h2) {
          let l2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            l2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, l2 = { result: new se(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ae(y2), X(H, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...h2);
                }
              }
            const n3 = new se({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
            throw n3.detail = l2.result, X(B, { type: V, content: n3 }), n3;
          }
          return X(B, { type: V, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Hs(e2) {
    return R("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Js({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Hs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${A}\``);
  }
  async function zs(e2) {
    const t2 = Hs(this);
    return t2.initPromise || (t2.initPromise = Js.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function Vs(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return zs.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Gs(e2) {
    !function(e3) {
      de = e3;
    }(e2);
  }
  function Ys(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class Qs extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ys("getSystemInfo")(), Ys("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Xs(e2) {
    {
      const { osName: e3, osVersion: t3 } = he();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await Et(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === A.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Zs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const er = { tcb: xt, tencent: xt, aliyun: me, private: Ut, dcloud: Ut, alipay: Wt };
  let tr = new class {
    init(e2) {
      let t2 = {};
      const n2 = er[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === A;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Xs(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Zs(t2), Xn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = us(hs, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = us(hs, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ks, e3.chooseAndUploadFile = js.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Bs(e3);
        } }), e3.SSEChannel = Qs, e3.initSecureNetworkByWeixin = Vs(e3), e3.setCustomClientInfo = Gs, e3.importObject = Ws(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ne(n4), h2 = i2.then(() => s2 ? Promise.resolve() : K(F(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : K(F(t3, "success"), e5).then(() => K(F(t3, "complete"), e5)).then(() => (r2 && X(B, { type: z, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : K(F(t3, "fail"), e5).then(() => K(F(t3, "complete"), e5)).then(() => (X(B, { type: z, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && X(B, { type: z, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && X(B, { type: z, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], tr = tr.init(t2), tr._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        tr[e3] = function() {
          return console.error(n2), Promise.reject(new se({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    if (Object.assign(tr, { get mixinDatacom() {
      return Bs(tr);
    } }), Ns(tr), tr.addInterceptor = M, tr.removeInterceptor = q, tr.interceptObject = j, uni.__uniCloud = tr, "app" === A) {
      const e3 = U();
      e3.uniCloud = tr, e3.UniCloudError = se;
    }
  })();
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
