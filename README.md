# mobile-client-v2

* NativeBase Drawer에 관한 issue
  * 현재 react-native-drawer가 불안정한 관계로 npm install 한 후에 node_modules를 수정해야 합니다.
  * node_modules/react-native-drawer/index.js의 line number 210줄에 다음을 복붙하세요
  * drawerProps[this.props.side] = Math.round(-this.getDeviceLength() + this._offsetOpen + this._length)
  
