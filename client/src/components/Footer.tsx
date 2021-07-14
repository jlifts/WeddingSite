import { Link } from 'react-router-dom';
import { REGISTRY_GUEST } from '../key';

const Footer: React.FC = () => {
  return (
    <footer className='bg-secondary text-white font-items py-10'>
      <div className='grid grid-cols-3 justify-items-center'>
        <div className='flex flex-col'>
          <h5 className='text-lg font-semibold pb-3'>Menu</h5>
          <Link className='hover:text-primary' to='/'>
            Home
          </Link>
          <Link className='hover:text-primary' to='/rsvp'>
            RSVP
          </Link>
          <Link
            className='hover:text-primary'
            to={{ pathname: REGISTRY_GUEST }}
            target='blank'
          >
            Registry
          </Link>
          <Link className='hover:text-primary' to='/photos'>
            Photos
          </Link>
          <Link className='hover:text-primary' to='/faq'>
            FAQ
          </Link>
          <Link className='hover:text-primary' to='/places-to-stay'>
            Places To Stay
          </Link>
        </div>
        <div>
          <Link to='/login' className='hover:text-primary'>
            Bridal Party Login
          </Link>
          <div>Insta</div>
          <div>Facebook</div>
        </div>
        <div className='flex flex-col'>
          <form
            action='POST'
            method='POST'
            data-netlify='true'
            name='wedding-contact-form'
            className='flex flex-col space-y-4'
          >
            <input
              type='hidden'
              name='form-name'
              value='wedding-contact-form'
            />
            <h5 className='text-lg font-semibold'>Contact Groom/Dev</h5>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='bg-transparent appearance-none focus:outline-none border-b-2 focus-within:border-primaryAccent relative'
            />
            <textarea
              name='message'
              placeholder='Message'
              className='bg-transparent resize-none appearance-none focus:outline-none border-b-2 focus-within:border-primaryAccent relative pb-14'
            />
            <button
              type='submit'
              className='bg-transparent text-white rounded-md hover:bg-white hover:text-black'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
