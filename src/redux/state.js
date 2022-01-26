let store = {
  _state:{
    profilePage:{
      posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: 'It is my first post', likesCount: 11 },
        { id: 3, message: 'Sholom #3', likesCount: 14 },
        { id: 4, message: 'Hey body', likesCount: 10 }
      ],
      newPostText: 'Billy unlikely comeback'
    },
    messagePage:{
      dialogs:[
        {id: 1, name:'Dimych'},
        {id: 2, name:'Andrew'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Sasha'},
        {id: 5, name:'Victor'},
        {id: 6, name:'Valera'}
      ],
      messages:[
        {id: 1, message:'Hi!'},
        {id: 2, message:'How do you do'},
        {id: 3, message:'Yo'},
        {id: 4, message:'Yeah'},
        {id: 5, message:'Bruh'}
      ]
    },
    sidebar:{}
  },
  _callSubscriber(state){
    console.log('State changed!');
  },

  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){
    //action - object {type: 'e.g.ADD-POST'(string with action to execute)}
    if(action.type === 'ADD-POST'){
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;
//store - OOP