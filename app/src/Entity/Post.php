<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createDate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $lastEditDate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isHidden;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $img;

    /**
     * @ORM\ManyToOne(targetEntity=PostCategory::class, inversedBy="posts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $postType;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreateDate(): ?\DateTimeInterface
    {
        return $this->createDate;
    }

    public function setCreateDate(\DateTimeInterface $createDate): self
    {
        $this->createDate = $createDate;

        return $this;
    }

    public function getLastEditDate(): ?\DateTimeInterface
    {
        return $this->lastEditDate;
    }

    public function setLastEditDate(\DateTimeInterface $lastEditDate): self
    {
        $this->lastEditDate = $lastEditDate;

        return $this;
    }

    public function getIsHidden(): ?bool
    {
        return $this->isHidden;
    }

    public function setIsHidden(bool $isHidden): self
    {
        $this->isHidden = $isHidden;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(?string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getPostType(): ?PostCategory
    {
        return $this->postType;
    }

    public function setPostType(?PostCategory $postType): self
    {
        $this->postType = $postType;

        return $this;
    }

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }
}
