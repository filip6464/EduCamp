<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{

    #[Route('/api/post', name: 'apipost')]
    # @param ConferenceRepository $conferenceRepository
    public function getPosts(PostRepository $postRepository): Response
    {

       $posts = $postRepository->findAll();

        $response = new Response();
        $response->setContent(json_encode($posts));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }

}
