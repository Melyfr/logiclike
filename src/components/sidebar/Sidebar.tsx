import './Sidebar.scss'

type ISidebarProps = {
    tags: Set<string>;
    currTag: string;
    setCurrTag: (currTag: string) => void
}

const Sidebar: React.FC<ISidebarProps> = ({tags, currTag, setCurrTag}) => {
  return (
    <nav>
      <ul className='sidebar'>
        {tags && Array.from(tags).map(tag => (
          <li key={tag} className={tag !== currTag ? 'text sidebar__tag' : 'text sidebar__tag sidebar__tag--actvie'} onClick={() => setCurrTag(tag)}>{tag}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar;
