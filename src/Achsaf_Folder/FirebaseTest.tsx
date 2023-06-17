import React, {useEffect, useMemo, useRef, useState} from 'react';
import {db} from '../config/firebase';
import {doc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import {Game} from "../Components/Classes"
import logo from "../Pages/step-1_logo.svg";
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;

class A{
    public a: number;
    public b: number;
    public c: number;

    constructor() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }

    public toString(){
        return this.a
    }

}


// @ts-ignore
function FirebaseTest() {

    const [aClass, setAClass] = useState(new A())

    const bClass = {a:0, b:0, c:0}

    useEffect(() =>{
        console.log("A change occured")
        console.log(aClass.toString())
    },[aClass])


    const handleOnClick = () => {
        let c = new A();
        c.a = aClass.a+1
        c.b = aClass.b+2
        c.c = aClass.c+3

        setAClass(c)
        console.log("aClass was updated")
        // console.log(aClass)
    }

    // @ts-ignore
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{width: "50px", height: "50px"}} onClick={handleOnClick}/>
            <img style={{position: "absolute", bottom: "50%"}} src={logo} width={200} height={200}/>
        </div>
    );
}

export default FirebaseTest;
