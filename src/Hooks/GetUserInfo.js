
export const GetUserInfo = () => {
  const {id, name, profileImage, isAuth} = JSON.parse(localStorage.getItem('auth')) || {}
  return {id, name, profileImage,isAuth}
}

