import styled from "styled-components";

export const gradient = 'linear-gradient(-20deg, #ff2846 0%, #6944ff 100%)'
export const green = '#B5E385'
export const red = '#ff2846'

const TodoWrapper = styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 60%;
    margin: auto;
    border-radius: 15px;
    padding: 50px;
.title{
    color: #111;
}

.glassMor {
    background: rgba( 255, 9, 13, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.0px );
    -webkit-backdrop-filter: blur( 10.0px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.glassMor2{
    background: rgba( 255, 242, 0, 0.15 );
    backdrop-filter: blur( 10.0px );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    -webkit-backdrop-filter: blur( 10.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.iconColor{
  background-color: #fff;
}

.hoverbtn:hover{
    transform: scale(1.1);
}
@media (max-width: 860px){
    width: 80%;
    padding: 20px;
    .wrapperHoverBtn{
        width: 40%;
        margin: 20px auto;
        opacity: 1;
        transform: translateY(0);
        height: 20px;
    }
    .todo-title{
        margin: 20px auto;
    }
    .gr-btn{
        width: 100%;
    }
}
@media (max-width: 565px){
    .wrapperHoverBtn{
        width: 70%;
    }
    .todo-title{
        margin: 20px auto;
        padding: 0 20px;
    }
}
`
export default TodoWrapper