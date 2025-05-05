<?php

defined('WEKIT_VERSION') || exit('Forbidden');

/**
 * ��ȡ΢���б�.
 *
 * @author Jianmin Chen <sky_hold@163.com>
 * @license http://www.phpwind.com
 *
 * @version $Id: PwFetchWeiboById.php 8959 2012-04-28 09:06:05Z jieyin $
 */
class PwFetchWeiboById implements iPwDataSource
{
    public $ids = array();

    public function __construct($ids)
    {
        $this->ids = $ids;
    }

    public function getData()
    {
        return Wekit::load('weibo.PwWeibo')->getWeibos($this->ids);
    }
}
