import { useRef } from 'react';

import logo from '../../public/logo.png';
import Input from './Input';
import Modal from './Modal';
export default function LearningProject({onAdd}) {

const title = useRef();
const desc = useRef();
const date = useRef();
const modal = useRef();
function handleSave() {
    const eTitle = title.current.value;
    const edesc = desc.current.value;
    const edate= date.current.value;

    if(eTitle.trim() === "" || edesc === "" || edate === "") {
        return modal.current.open()
        //show error
    }
    else {
        onAdd({
            title: eTitle,
            desc: edesc,
            date: edate
        })
    }
    
}

    return(
       <>
       <Modal ref={modal}>
        <h2>Invalid Input</h2>
       </Modal>
       <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
                <li><button className='bg-stone-800 text-stone-50 hover: bg-stone-950' onClick={handleSave}>Save</button></li>
            </menu>
            <div>
              <Input ref={title} label="Title"/>
              <Input ref={desc}  label="Desc" textarea />
              <Input type="date" ref={date} label="Date"/>

            </div>
            
        </div>
       </>
        
       
       
    )
}