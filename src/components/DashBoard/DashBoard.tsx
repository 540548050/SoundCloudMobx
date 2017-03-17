import * as React from 'react'
import * as RModule from 'react-css-modules'
const styles = require('./dashboard.scss')
import Profile from '../Profile/Profile';
import { observer, inject } from 'mobx-react'
import { IUserStore } from '../../store/UserStore'
import FollowersView from '../../components/Followers'
import { FETCH_FOLLOWERS } from '../../constants/fetchTypes'
import FollowersContainer from '../Followers'
interface IDashBorardProps {
  UserStore: IUserStore
} 
@inject("UserStore")
@observer
@RModule(styles)
class DashBorard extends React.Component<IDashBorardProps, any> {
  renderFollowers = () => {
    const { followers, isLoadings } = this.props.UserStore;
    const fetchFollowersing = isLoadings[FETCH_FOLLOWERS];
    return <FollowersView followers={followers} isLoading={fetchFollowersing} />;
  }
  render() {
    const { user, followers, isLoadings } = this.props.UserStore
    const followerIsLoading = isLoadings[FETCH_FOLLOWERS];
    return (
      <div styleName={'container'}>
        <aside styleName={'aside'}>
          <Profile user={user} />
          <FollowersContainer followers={followers} isLoading={followerIsLoading}/>
        </aside>
      </div>
    );
  }
}


export default (DashBorard);