import Category from '../../category/category';
import Username from '../username/username';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { kickMember } from '../../../store/guilds';

export interface MemberListProps {
  users: Entity.User[];
}

const MemberList: React.FunctionComponent<MemberListProps> = (props: MemberListProps) => {
  const dispatch = useDispatch();
  const guild = useSelector((s: Store.AppStore) => s.ui.activeGuild)!;
  const selfUser = useSelector((s: Store.AppStore) => s.auth.user)!;
  
  const canManage = selfUser.id === guild.ownerId;
  
  const members = props.users.map(u => (
    <ContextMenuTrigger id={u.id} key={u.id}>
      <div className="mb-2">
        <Username user={u} guild={guild} />
      </div>

      <ContextMenu
        id={u.id}
        style={{width: '188px'}}
        className="bg-bg-tertiary p-2 rounded shadow">
        {canManage && u.id !== selfUser.id && <MenuItem
          className="danger cursor-pointer"
          onClick={() => dispatch(kickMember(guild.id, u.id))}>
          <span>Kick {u.username}</span>
        </MenuItem>}
      </ContextMenu>
    </ContextMenuTrigger>
  ));

  return (
    <div
      style={{ width: '240px' }}
      className="member-list bg-bg-secondary">
      <Category title="Online" count={props.users.length} />
      <div className="mt-2 ml-2">{members}</div>
    </div>
  );
}
 
export default MemberList;