import React, {useState} from 'react'
import { Plus, X } from 'react-feather'

function AddList() {
    const [List,setList]=useState('');
    const [show,setShow]=useState(false);

    const saveList = ()=>{
        if(!List){
            return;
        }
        props.getList(List);
        setList('');
        setShow(!show);
    }

    const closeBtn=()=>{
        setList('');
        setShow(!show);
    }

  return (
    <div>
        <div className="flex flex-col">
           
           {show && <div>
                <textarea value={List} onChange={(e)=>setList(e.target.value)} className='p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900' name="" id="" cols="30" rows="2" placeholder='Enter List Title...'></textarea>
                <div className='flex p-1'>
                    <button onClick={()=>saveList()}className='p-1 rounded bg-sky-600 text-white mr-2'>Add List</button>
                    <button onClick={()=> closeBtn()} className='p-1 rounded hover:bg-gray-600'><X size={16}></X></button>
                </div>
            </div>}

            {!show && <button onClick={()=> setShow(!show)} className='flex p-1 w-full justify-start rounded items-center mt-1 hover:bg-gray-500 h-8'>
                <Plus size={16}></Plus>Add a List
            </button>}

        </div>
    </div>
  )
}

export default AddList