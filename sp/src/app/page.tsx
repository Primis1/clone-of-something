import Button from '../ui/components/btn/button';
import info from '../lib/fetch'
export default function Home() {

  return (
      <main>
        <div className="container">
          <div className='flex flex-wrap align-center	'> 
              <div>
                <p className='text-black pt-[30px] pl-[20px]'>Popular Search:</p>
              </div>
              {info && info.item && info.item.map((item: {id: number, title: string}) => (
                <Button key={item.id} s={'text-white bg-indigo-700'} t={item.title} />
              ))}
          </div>
        </div>

       
    </main>
  );
}