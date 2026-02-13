Page({
  data: {
    username: '',
    password: ''
  },

  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },

  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  onLogin() {
    const { username, password } = this.data;
    console.log('用户名:', username);
    console.log('密码:', password);
  },

  onGoRegister() {
    wx.navigateTo({
      url: '/pages/auth/register/register'
    });
  }
});
