<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadedDocument extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function document()
    {
        return $this->belongsTo(Document::class);
    }

    public function documentFiles()
    {
        return $this->hasMany(DocumentFile::class);
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeDriverUploadedDocuments($query, $driver)
    {
        return $query->where('driver_id', $driver->id);
    }
}
