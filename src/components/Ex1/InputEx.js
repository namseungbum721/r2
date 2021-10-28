import React, {useState} from 'react';

const initData = {
    msg: '',
    content: '',
    writer:''

}

const InputEx = () => {

    const [data, setData] = useState({...initData})

    const handleChange = (e) => {
        const target = e.target //현재 이벤트가 걸린 타겟을 부른다.

        const targetName = target.name

        data[targetName] = target.value

        setData({...data}) //...사용 이유는 새로운 객체 만들려고 쓰는거임 기억하자
    }

    const handleClear = (e) => { //초기화 reset 기능
        setData({...initData})
    }


    return (
        <div>
            <h2>INPUT</h2>
            <h3>{data.msg}-------------------{data.content}</h3>
            <input type='text' name='msg' value={data.msg} onChange={(e) => {
                handleChange(e)
            }}/>
            <input type='text' name='content' value={data.content} onChange={(e) => {
                handleChange(e)
            }}/>
            <button onClick={(e) => {
                handleClear(e)
            }}>CLEAR
            </button>
        </div>
    );
};

export default InputEx;