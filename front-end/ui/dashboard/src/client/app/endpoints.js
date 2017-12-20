export default class Endpoints {
  static login(auth_params) {
    return {
      method: 'POST',
      endpoint: 'users/login',
      loading_message: 'Loggin You In',
      body: JSON.stringify(auth_params)
    }
  }
  // More static methods that just return an object
}
