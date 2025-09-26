<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    /************************************************************
    | RELATIONSHIPS
     *************************************************************/
    public function documentType()
    {
        return $this->belongsTo(DocumentType::class);
    }

    public function uploadedDocuments()
    {
        return $this->hasMany(UploadedDocument::class);
    }

    /************************************************************
    | SCOPES
     *************************************************************/
    public function scopeDriverDocuments($query, $user)
    {
        return $query->where('driver_id', $user->id);
    }
}
