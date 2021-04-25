<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PostTypeRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ApiResource
 * @ORM\Entity(repositoryClass=PostTypeRepository::class)
 */
class PostType implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }
}
