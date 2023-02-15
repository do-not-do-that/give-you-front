import { useDispatch } from 'react-redux';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { fetchUserById } from '../../../Store/User';

const SocialLoginContainer = ({ handleClose }) => {
  const dispatch = useDispatch();
  const googleOnSuccess = async (response) => {
    // const { tokenId } = response;
    // const userData = { code: tokenId, social: 'google' };

    // dispatch(fetchUserById(userData)).then((response) => {
    //   const id = response.payload._id;
    //   if (response.payload.loginSuccess === true) handleClose();
    //   else {
    //     dispatch(setSignUpUser({ key: 'id', value: id }));
    //     dispatch(nextStep());
    //   }
    // });
    console.log('리스폰스 : ', response);
  };
  return <SocialLogin googleOnSuccess={googleOnSuccess}></SocialLogin>;
};

export default SocialLoginContainer;
