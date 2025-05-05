<?php

/**
 * 获得任务条件扩展的DM的对象工厂
 *
 * @author xiaoxia.xu <xiaoxia.xuxx@aliyun-inc.com>
 * @copyright ©2003-2103 phpwind.com
 * @license http://www.windframework.com
 *
 * @version $Id: PwTaskDmFactory.php 16740 2012-08-28 06:02:13Z xiaoxia.xuxx $
 */
class PwTaskDmFactory
{
    /**
     * 获取完成条件对应的任务DM对象
     *
     * @param string $condition member/bbs
     * @param string $child
     *
     * @return PwTaskDm
     */
    public static function getInstance($condition, $child)
    {
        $type = strtolower($condition).'-'.strtolower($child);
        switch ($type) {
            case 'member-msg':

                return new PwTaskMemberMsgDm();
            case 'member-fans':

                return new PwTaskMemberFansDm();
            case 'bbs-postthread':

                return new PwTaskBbsPostDm();
            case 'bbs-reply':

                return new PwTaskBbsReplyDm();
            case 'bbs-like':

                return new PwTaskBbsLikeDm();
            default:

                return new PwTaskDm();
        }
    }

    /**
     * 添加奖励.
     *
     * @param PwTaskDm $dm
     * @param array    $reward
     *
     * @return PwTaskDm
     */
    public static function addRewardDecoration(PwTaskDm $dm, $reward)
    {
        switch ($reward['type']) {
            case 'credit':
                $decoration = Wekit::load('SRV:task.srv.reward.PwTaskCreditRewardDo');

                return $dm->setReward($reward)->setRewardDecoration($decoration);
                break;
            case 'group':
                $decoration = Wekit::load('SRV:task.srv.reward.PwTaskGroupRewardDo');

                return $dm->setReward($reward)->setRewardDecoration($decoration);
            default:
                return $dm->setReward($reward);
                break;
        }
    }
}
