<?php

namespace App\Events;

use App\Service;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ServiceCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $admin_pusher_id;
    public $service;

    /**
     * Create a new event instance.
     *
     * @param $admin_pusher_id
     * @param Service $service
     */
    public function __construct($admin_pusher_id, Service $service)
    {
        $this->admin_pusher_id = $admin_pusher_id;
        $this->service = $service;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('admin.1.service.created');
//        return new PrivateChannel('admin.'.$this->admin_pusher_id.'.service.created');
    }

    public function broadcastAs()
    {
        return 'ServiceCreated';
    }
}
