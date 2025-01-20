// interfaces
interface IProps {
  icon?: string;
  title: string;
  onMenuClick?: () => void; // Optional handler for the menu click
}

const HeaderLeft: React.FC<IProps> = ({ icon, title, onMenuClick }) => (
  <div className='header-left nowrap no-select'>
    {icon && (
      <button type='button' className='pointer' onClick={onMenuClick}>
        <i className='material-icons'>{icon}</i>
      </button>
    )}
    <h1>{title}</h1>
  </div>
);

export default HeaderLeft;
