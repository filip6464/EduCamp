<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/security/login', name: 'security_login')]
    public function login(Request $request, UserRepository $userRepository): Response
    {
        $response = new Response();

        $email = $request->get('email');
        $password = $request->get('password');

        $user = $userRepository->findOneBy(array('username' => $email,'password' => $password));

        $content = array();
        $success = 0;
        $message = "Login error!";

        if($user != null){            $success = 1;
            $message = "Login Success!";
        }

       array_push($content,$success,$message);

        $content = json_encode($content);

        $response->setContent($content);

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
