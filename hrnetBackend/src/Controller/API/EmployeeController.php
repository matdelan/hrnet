<?php

namespace App\Controller\API;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\EmployeeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\EmployeeType;
use Symfony\Component\Serializer\SerializerInterface;

class EmployeeController extends AbstractController
{
    //private EntityManagerInterface $entityManager;
    private FormFactoryInterface $formFactory;
    private ValidatorInterface $validator;
    private EmployeeRepository $employeeRepository;

    public function __construct(private EntityManagerInterface $entityManager, FormFactoryInterface $formFactory, ValidatorInterface $validator, EmployeeRepository $employeeRepository, private SerializerInterface $serializer){}

    #[Route('/api/employee', name: 'employee_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        
        try {
            $data = json_decode($request->getContent(), true);
    
            // Crée un formulaire à partir de la classe de formulaire EmployeeType
            $form = $this->formFactory->create(EmployeeType::class);
            $form->submit($data);
    
            // Vérification de la validité du formulaire
            if (!$form->isValid()) {
                return new JsonResponse([
                    'status' => 400,
                    'message' => (string) $form->getErrors(true, false),
                ], JsonResponse::HTTP_BAD_REQUEST);
            }
    
            // Récupère l'objet Employee
            $employee = $form->getData();
    
            // Validation de l'entité Employee
            $errors = $this->validator->validate($employee);
            if (count($errors) > 0) {
                return new JsonResponse([
                    'status' => 406,
                    'message' => (string) $errors,
                ], JsonResponse::HTTP_BAD_REQUEST);
            }
    
            // Persistance de l'entité Employee
            $this->entityManager->persist($employee);
            $this->entityManager->flush();
    
            // Formatage des données de réponse
            $responseData = [
                'id' => $employee->getId(),
                'firstname' => $employee->getFirstname(),
                'lastname' => $employee->getLastname(),
                'dateBirthday' => $employee->getDateBirthday()->format('Y-m-d'),
                'dateStart' => $employee->getDateStart()->format('Y-m-d'),
                'departement' => $employee->getDepartement(),
                'street' => $employee->getStreet(),
                'city' => $employee->getCity(),
                'state' => $employee->getState(),
                'zipCode' => $employee->getZipCode(),
            ];
            
            //$responseData = $this->serializer->serialize($employee, 'json', ['groups' => 'employee:read']);
    
            return new JsonResponse([
                'status' => 200,
                'message' => 'Employee created successfully',
                'data' => $responseData,
            ], JsonResponse::HTTP_CREATED);
        } catch (\Exception $e) {
            return new JsonResponse([
                'status' => 500,
                'message' => $e->getMessage(),
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    #[Route('/api/employee', name: 'employee_list', methods: ['GET'])]
    public function getEmployees(): JsonResponse
    {
        // Récupère tous les employés à partir du repository
        $employees = $this->employeeRepository->findAll();

        // Transforme les employés en un tableau pour le retour JSON
        $data = [];
        
        foreach ($employees as $employee) {
            
            $data[] = [
                'id' => $employee->getId(),
                'firstname' => $employee->getFirstname(),
                'lastname' => $employee->getLastname(),
                'dateBirthday' => $employee->getDateBirthday()->format('Y-m-d'),
                'dateStart' => $employee->getDateStart()->format('Y-m-d'),
                'departement' => $employee->getDepartement(),
                'street' => $employee->getStreet(),
                'city' => $employee->getCity(),
                'state' => $employee->getState(),
                'zipCode' => $employee->getZipCode(),
            ];
        }

        return new JsonResponse([
            'status' => 200,
            'message' => 'Employees list send',
            'data' => $data,
        ], JsonResponse::HTTP_OK);
    }

    #[Route('/api/test', name: 'employee_test', methods: ['GET'])]
    public function index()
    {
        return new JsonResponse(['message' => 'Test message']);
    }
}