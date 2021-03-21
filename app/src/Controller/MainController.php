<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="main", priority="-1", defaults={"reactRouting": null}, requirements={"reactRouting"=".+"})
     */
    public function index()
    {
        return $this->render('/home/index.html.twig');
    }
}
