import React,{useState,useContext} from 'react'
import { ChevronRight,ChevronLeft, Plus,X } from 'react-feather';
import { Popover } from 'react-tiny-popover'
import { BoardContext } from '../context/BoardContext';

function Sidebar() {
    
    const blankBoard = {
        name: '',
        bgcolor: '#f60000',
        items: []
    };

    const [boardData,setBoarddata]=useState(blankBoard);
    const [collapsed,setCollapsed]=useState(false);
    const [showpop,setShowpop]=useState(false);
    const {allboard,setAllBoard}=useContext(BoardContext);

    const setActiveboard = (i) =>{
        let newBoard={...allboard}
        newBoard.active=i;
        setAllBoard(newBoard);
    }

    const addBoard = () =>{
        let newB={...allboard};
        newB.boards.push(boardData);
        setAllBoard(newB);
        setBoarddata(blankBoard);
        setShowpop(!showpop);
    }

  return (
    <div className={`bg-[#1d2125] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${collapsed?'w-[40px]':'w-[280px]'}`}>
        Sidebar
        
        {collapsed && <div className='p-2'>
            <button onClick={()=>setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm'>
                <ChevronRight size={18}></ChevronRight>
            </button>
        </div>}

        {!collapsed && <div>
            
            <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
                <h4>Return Dev's workspace</h4>
                <button onClick={()=>setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm p-1'>
                    <ChevronLeft size={18}></ChevronLeft>
                </button>
            </div>
            
            <div className='boardlist'>
                <div className='flex justify-between px-3 py-2'>
                    <h6> Your Boards</h6>
                    

                    <Popover
                        isOpen={showpop}
                        align='right'
                        positions={['right','top', 'bottom', 'left']} // preferred positions by priority
                        content={
                        <div className='m1-2 p-2 w-60 flex flex-col justify-center items-center bg-slate-500 text-white-rounded'>
                            <button onClick={()=>setShowpop(!showpop)} className='absolute right-2 top-2 hover:bg-gray-500 p-1 rounded'>
                            <X size={16}></X></button>
                            <h4 className='py-3'>Create Board</h4>
                            <img src="https://placeholder.co/200*120/png" alt="" />
                            
                            <div className='flex flex-col items-start'></div>
                            
                            <label htmlFor="title">Board Title<span>*</span></label>
                            <input  value={boardData.name} onChange={(e)=>setBoarddata({...boardData,name:e.target.value})} type="text" className='mt-2 h-8 px-2 w-full bg-gray-700'/>

                            <label htmlFor="color">Board color<span>*</span></label>
                            <input  value={boardData.bgcolor} onChange={(e)=>setBoarddata({...boardData,bgcolor:e.target.value})} type="color" className='mt-2 h-8 px-2 w-full bg-slate-700 hover:bg-gray-500'/>

                            <button onClick={(e)=>addBoard()} className='w-full rounded h-8 bg-slate-700 mt-2 hover:bg-gray-500'/>
                        </div>
                        } 
                        >
                        <button onClick={()=> setShowpop(!showpop)} className='hover:bg-slate-600 p-1 rounded-sm'>
                        <Plus size={16}></Plus>
                    </button>
                        
                    </Popover>

                </div>
            </div>

            <ul>
                {allboard.boards && allboard.boards.map((x)=>{
                   return <li>
                        <button onClick={()=>setActiveboard(i)} className='px-3 py-2 w-full text-sm flex justify-start align-baseline hover:'>
                            <span className='w-6 h-max rounded-sm mr-2' style={{backgroundColor:`${x.bgcolor}`}}>&nbsp;</span>
                            <span>{x.name}</span>   
                        </button>
                    </li>
                    })
                }
               
            </ul>
        
        </div>}
    </div>
  );
}

export default Sidebar;