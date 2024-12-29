import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';
import PropTypes from 'prop-types';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card className="flex gap-5 w-64 p-5">
            <HomeIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>Mumbai, new shivam building</p>
            </div>
            {showButton && <Button variant='contained' fullWidth onClick={() => (handleSelectAddress(item))}>Select</Button>}
        </Card>
    )
}

AddressCard.propTypes = {
    item: PropTypes.object.isRequired,
    showButton: PropTypes.bool,
    handleSelectAddress: PropTypes.func
};

AddressCard.defaultProps = {
    showButton: false
};

export default AddressCard