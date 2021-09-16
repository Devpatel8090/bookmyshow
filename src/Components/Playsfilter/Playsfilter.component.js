import { Disclosure } from '@headlessui/react';
import { PreviousMap } from 'postcss';
import{BiChevronDown,BiChevronUp} from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
     
    <Disclosure  >
        {({ open }) => (
          
            <>
            <div className="bg-gray-100 border-lg m-3 rounded- p-2">
           
      <Disclosure.Button className="py-2  flex items-center gap-3 ">
        {open ? <BiChevronUp /> : <BiChevronDown />}
        

        <span className={open?"text-red-500" : "text-grey-100"} >
        {props.title}

        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
          <div className="flex flex-wrap items-center gap-2 w-11/12 m-2  " >
        {props.tags.map((tag) => (
            <>

            <div className="border-2 border-gray p-1 rounded-sm">

                <span className="text-red-600" >{tag}</span>
                </div>
                
                
            
            </>

        )
        
        
        )}
        </div>
      </Disclosure.Panel>
      </div>
      </>
      
      )}
    </Disclosure>
   
        
  );
};

export default PlaysFilter;